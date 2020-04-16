package main

import (
	"context"
	"html/template"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"
)

func pingAndKill(res http.ResponseWriter, req *http.Request) {
	pingBase(res, req)

	// terminate after serving request
	syscall.Kill(syscall.Getpid(), syscall.SIGINT)
}

func ping(res http.ResponseWriter, req *http.Request) {
	if(!invoked){
		invoked = true;
		// The following calls the keepBusy func every so and so many seconds
		// see: https://stackoverflow.com/questions/43002163/run-function-only-once-for-specific-time-golang
		var dieTDiff = time.Duration(3) * time.Second
		dieTime = time.Now().Add(dieTDiff)
		log.Printf("Shutting down in %v\n", dieTDiff)
		log.Printf("I will die at %s", dieTime)
		ticker := time.NewTicker(dieTDiff)
		go func(ticker *time.Ticker) {
			for {
				select {
				case <-ticker.C:
					syscall.Kill(syscall.Getpid(), syscall.SIGINT)
				}
			}
			}(ticker)
	}

	pingBase(res, req)
}

func pingBase(res http.ResponseWriter, req *http.Request) {
	const tpl = `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Served from {{.From}}</title>
	</head>
	<body>
		This page is served from: {{.From}} <br>
		The server container will die in {{.DieTime}}s
	</body>
</html>`

	check := func(err error) {
		if err != nil {
			log.Fatal(err)
		}
	}
	t, err := template.New("webpage").Parse(tpl)
	check(err)

	data := struct {
		From    string
		DieTime int
	}{
		From:    hostName,
		DieTime: subtractTime(time.Now(), dieTime) + 1,
	}

	err = t.Execute(res, data)
	check(err)
}

func subtractTime(time1,time2 time.Time) int{
    diff := time2.Sub(time1).Seconds()
    return int(diff)
}

// I will die in a random time some minutes from now on...
var oneSecond = time.Duration(1) * time.Second
var dieTime = time.Now().Add(oneSecond * 3)
var hostName, _ = os.Hostname()
var myPid = os.Getpid()
var invoked = false;

func main() {
	log.Printf("PID: %v", myPid)
	log.Printf("hostname: %v", hostName)
	
	// setup endpoints
	http.HandleFunc("/kill", pingAndKill)
	http.HandleFunc("/status", ping)
	http.HandleFunc("/", ping)

	// Create a new server and set timeout values.
	server := http.Server{
		Addr: ":8080",
	}

	// We want to report the listener is closed.
	var wg sync.WaitGroup
	wg.Add(1)

	// Start the listener.
	go func() {
		log.Println("listener: Listening on localhost:8080")
		log.Println("listener:", server.ListenAndServe())
		wg.Done()
	}()

	// Listen for an interrupt signal from the OS. Use a buffered
	// channel because of how the signal package is implemented.
	osSignals := make(chan os.Signal, 1)
	signal.Notify(osSignals, os.Interrupt)

	// Wait for a signal to shutdown.
	<-osSignals

	// Create a context to attempt a graceful 5 second shutdown.
	const timeout = 5 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), timeout)
	defer cancel()

	// Attempt the graceful shutdown by closing the listener and
	// completing all inflight requests.
	if err := server.Shutdown(ctx); err != nil {
		log.Printf("Shutdown: Graceful shutdown did not complete in %v : %v", timeout, err)

		// Looks like we timedout on the graceful shutdown. Kill it hard.
		if err := server.Close(); err != nil {
			log.Printf("Shutdown: Error killing server : %v", err)
		}
	}

	// Wait for the listener to report it is closed.
	wg.Wait()
	log.Println("Main: Completed")
	
}

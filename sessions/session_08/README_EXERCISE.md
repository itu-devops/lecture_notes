
## A Basic EFK Deployment 

Why? Because the L in ELK is quite horrible. The following is a good evaluation:

> "I have been replacing logstash with filebeat pretty much every chance I get. Maybe it's just my bad experiences, but logstash is an absolute memory hog, has a tendency to get itself stuck and eat all the CPU and memory on the machine (I really feel like I've seen more outages caused by logstash going nuts than logstash has ever helped me resolve), and is itself utterly opaque and un-debuggable."

> (from https://www.reddit.com/r/devops/comments/9quyzo/from_elk_to_efk_why/) 


TODO: 

- from here on, rename all instances of `elk` to `efk` 


## Step by Step w/ Explanations

Define the folder where you want to define your ELK setup in an envvar. 
Save the envvar definition to your ~/.profile so it's available next time you login.
Obviously change `/home/mlun/` with something that makes sense for you: 

    export ELK_DIR=/home/mlun/elk_stack
    echo "export ELK_DIR=$ELK_DIR" >> ~/.profile 


create the folder for your elk setup: 
    
    mkdir $ELK_DIR && cd $ELK_DIR
    
    
Alternatively, instead of using the envvar simply replace it textually with the full path of your ELK folder everywhere you encounter ${ELK_DIR} in the examples below: 


### Define Basic Service Configuration

Let's define a `docker-compose.yml` with our little setup:

    version: "3"

	networks:
	  elk:
	
	volumes:
	    elk_elasticsearch_data:
	
	services:
	    elasticsearch:
	        image: "docker.elastic.co/elasticsearch/elasticsearch:7.2.0"
	        environment:
	            - "ES_JAVA_OPTS=-Xms1g -Xmx1g"
	            - "discovery.type=single-node"
	        ports:
	            - "9201:9200"
	        volumes:
	            - elk_elasticsearch_data:/usr/share/elasticsearch/data
	        networks:
	            - elk
	
	    kibana:
	        image: "docker.elastic.co/kibana/kibana:7.2.0"
	        ports:
	            - "5601:5601"
	        environment:
	            elasticsearch.hosts: '["http://elasticsearch:9200"]'
	        networks:
	            - elk
	
	    filebeat:
	        image: "docker.elastic.co/beats/filebeat:7.2.0"
	        user: root
	        volumes:
	            - $ELK_DIR/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro
	            - /var/lib/docker:/var/lib/docker:ro
	            - /var/run/docker.sock:/var/run/docker.sock
	        networks:
	            - elk
	
Observations: 

- `elk_elasticsearch_data` - just in case other elasticsearch volume present
- `"9201:9200"` - prevent conflicting with the other ES again
- `elasticsearch.hosts: '["http://elasticsearch:9200"]'` - because within the elk network the port is 9200!
- `$ELK_DIR/filebeat.yml` - because envvars are available in compose files
- `/usr/share/filebeat/filebeat.yml:ro` -- read only volume with filebeat config
- `/var/run/docker.sock:/var/run/docker.sock` - FileBeat to use the docker daemon to retrieve information and enrich the logs with things that are not directly in the log files, such as the name of the image or the name of the container
- `user: root` - because we need access to the docker.sock 
- TODO: add more notes that are releavant
- ...

### Configure Filebeat

The goal is to log everything that your docker containers output on the current machine:

create the following `filebeat.yml` in the $ELK_DIR folder: 

	filebeat.inputs:
	- type: container
	  paths: 
	    - '/var/lib/docker/containers/*/*.log'
	  
	
	processors:
	- add_docker_metadata:
	    host: "unix:///var/run/docker.sock"
	
	- decode_json_fields:
	    fields: ["message"]
	    target: "json"
	    overwrite_keys: true
	
	output.elasticsearch:
	  hosts: ["elasticsearch:9200"]
	  indices:
	    - index: "filebeat-%{[agent.version]}-%{+yyyy.MM.dd}"
	
	logging.json: true
	logging.metrics.enabled: false


then: 

	sudo chown root filebeat.yml 
	sudo chmod go-w filebeat.yml


Notes:

- input type `container`...
- TODO: add more relevant notes here



### Running Our Little EFK Logging Stack


if your username is part of the docker group you can now:

    docker-compose up
    
otherwise you'll have to `sudo docker-compose up`. 

However, you'll get an error because the ELK_DIR envvar was defined under the environment of your own user and is not available to root, which is the context in which the `docker-compose` is now being run. Thusm you can do something like:

    sudo ELK_DIR=$ELK_DIR docker-compose up

and all should be fine. 

You should be able to access kibana on your IP:5601 now
    
    

### Importing ES Indeces in Kibana

can be followed from [here](https://www.sarulabs.com/post/5/2019-08-12/sending-docker-logs-to-elasticsearch-and-kibana-with-filebeat.html)




### Adding Authentication


we remove the ports exposed by kibana and elasticsearch, and instead we use an nginx proxy. our compose file looks now like this: 

	version: "3"
	
	networks:
	  elk:
	
	volumes:
	    elk_elasticsearch_data:
	
	services:
	    elasticsearch:
	        image: "docker.elastic.co/elasticsearch/elasticsearch:7.2.0"
	        environment:
	            - "ES_JAVA_OPTS=-Xms1g -Xmx1g"
	            - "discovery.type=single-node"
	        volumes:
	            - elk_elasticsearch_data:/usr/share/elasticsearch/data
	        networks:
	            - elk
	
	    kibana:
	        image: "docker.elastic.co/kibana/kibana:7.2.0"
	        environment:
	            elasticsearch.hosts: '["http://elasticsearch:9200"]'
	        networks:
	            - elk
	
	    filebeat:
	        image: "docker.elastic.co/beats/filebeat:7.2.0"
	        user: root
	        volumes:
	            - ${ELK_DIR}/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro
	            - /var/lib/docker:/var/lib/docker:ro
	            - /var/run/docker.sock:/var/run/docker.sock
	        networks:
	            - elk
	    
	
	    nginx: 
	        image: nginx
	        ports:
	          - 9200:9200
	          - 5601:5601
	        networks:
	          - elk
	        volumes:
	          - type: bind
	            source: ${ELK_DIR}/nginx.conf
	            target: /etc/nginx/nginx.conf
	          - type: bind
	            source: ${ELK_DIR}/.htpasswd
	            target: /etc/nginx/.htpasswd


We’ll add a .htpasswd file that contains username/password combinations to access the locations. Simply run

	printf "USERNAME:$(openssl passwd -crypt PASSWORD)\n" > .htpasswd

NOTE:
- note that ES is not really needed to be visible from outside at the moment, so we might just as well close that port and remove it 


### Further reading

- Removing old logs
- Different ES Index for Some Of the Applications





### References:

Based on: 

- https://medium.com/@fchristl/managing-docker-logs-with-elasticsearch-and-kibana-dockerized-of-course-76fadb89363a
- https://www.sarulabs.com/post/5/2019-08-12/sending-docker-logs-to-elasticsearch-and-kibana-with-filebeat.html


















	
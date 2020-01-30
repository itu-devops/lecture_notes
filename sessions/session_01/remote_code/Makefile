init:
	python -c"from minitwit import init_db; init_db()"

build:
	gcc flag_tool.c -l sqlite3 -L/opt/local/lib/ -o flag_tool -g

clean:
	rm flag_tool

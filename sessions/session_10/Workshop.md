

## State of the teams

Most of the people are
- either stuck with logging
- working on the swarm

## DB queries are getting slower? 
- remember indexes

## How do we handle secrets?
- most of the groups keep secrets in envvars
- discussion about envvars vs. configuration files
- problem with envvars
	- every library that you transitively depend on has access to all the envvars - it could easily ship them to their server for example
- [Good discussion on SO about the pros and cons of envvars and config files](https://serverfault.com/questions/892481/what-are-the-advantages-of-putting-secret-values-of-a-website-as-environment-var)

Some of the envvars in the example below are ok and some are more problematic. Can you spot a problematic one?

```yml
environment:

      ZEEGUU_CONFIG: /Zeeguu-API/api.cfg
      ZEEGUU_DATA_FOLDER: /zeeguu-data/
      SENTRY_DSN: ${SENTRY_DSN}
      FLASK_MONITORING_DASHBOARD_CONFIG: /Zeeguu-API/fmd.cfg
      MICROSOFT_TRANSLATE_API_KEY: ${MICROSOFT_TRANSLATE_API_KEY}
      GOOGLE_TRANSLATE_API_KEY: ${GOOGLE_TRANSLATE_API_KEY}
      GOOGLE_APPLICATION_CREDENTIALS: /Zeeguu-API/lu-mir-zeeguu-credentials.json
      WORDNIK_API_KEY: ${WORDNIK_API_KEY}
      MULTI_LANG_TRANSLATOR_AB_TESTING: ${MULTI_LANG_TRANSLATOR_AB_TESTING}
      MYSQL_CONNECTION_STRING: {MYSQL_CONNECTION_STRING}
```

## Healthchecks

The container is up, but how is the orchestrator to know that your service inside it is working as expected? What if the web server has encountered an error, and is not answering any requests? 

Can be useful also to ensure that your app is ready to take connection a connection for apps that take some time to "warm up" (loading ML models in memory, etc.).

Example:

```yml
  zapi:
    depends_on:
      - mysql
      - fmd_mysql 
      - elasticsearch 
      - readability_server
    image: zeeguu/api:latest
    deploy:
      replicas: 2

    healthcheck:
      test: curl localhost:8080/available_languages | grep ', "es",'
      interval: 30s
      timeout: 13s
```
## Migrating to Swarm
- how to do it with zero downtime?
- create a new machine; play with it there; when you're happy simply switch

## Impact of update strategies on the consistency of the results that the users see

- with blue-green they never see inconsistent results
- with rolling-updates they might see different results in different calls 

![](images/inconsistent-state-with-rolling-updates.png)
## Logging in Swarm
- you should use a log driver, e.g. 
```yml
version: '3.8'

services:
  my_app:
    image: my_image
    ports:
      - "8080:8080"
    logging:
      driver: "fluentd"
      options:
        fluentd-address: "fluentd:24224"

  fluentd:
    image: fluent/fluentd
    volumes:
      - ./fluentd/conf:/fluentd/etc
    ports:
      - "24224:24224"

```

Simplest possible `fluentd` config: 
```xml
<source>
  @type forward
  port 24224
</source>

<match **>
  @type stdout
</match>

```
More complex configuration of `fluentd` with ELK: https://sysadmins.co.za/shipping-your-logs-from-docker-swarm-to-elasticsearch-with-fluentd/










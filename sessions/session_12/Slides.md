class: center, middle

### DevOps, Software Evolution and Software Maintenance

<img src="https://www.saa-authors.eu/picture/739/ftw_768/saa-mtcwmza4nzq5mq.jpg" width=40%/>

# Architectural Choices with Swarm


Mircea Lungu, Associate Professor,<br>
[IT University of Copenhagen, Denmark](https://www.itu.dk)<br>
`mlun@itu.dk`

---

# Next Lecture: Guest talking about  TD

![](images/guest_lecturer.png)


---

## To Think About

1. How do you migrate from `compose` to `swarm`?
3. What do you replicate?
4. Where do you keep the database?


---
# 1. From Docker-Compose to Docker-Swarm

Simplest way is to add the extra information needed in the docker-compose.yml unde the **deploy** key:
- replicas
- [placement constriants](https://docs.docker.com/engine/swarm/services/): labels, roles, other props of nodes
- update strategies, restart strategies
- [etc](https://docs.docker.com/compose/compose-file/deploy/).

Example: 
```
  api:
    image: itudevops/go-minitwit-api:TAG
    deploy:
      replicas: 2
      update_config:
        delay: 10s
        order: start-first
      placement:
        constraints:
          - "node.role==manager"
          - "node.hostname!=dbvm"
          - "node.label==frankfurt"
```


---
# 2. What do you replicate?


![300](images/where_to_replicate.png)

- Very likely the API 
- The log shipper (e.g. FileBeat) -- must be on every VM

--

### ... and what **not** to?
- The stuff that's not critical (e.g. Kibana)
- *Processes that store client state* (e.g. Databases that are not designed for replication)


---

## Why not replicate services that store client state?


![360](images/where_to_replicate.png)

*Examples of state from your systems?* 

--
- the clients that are currently logged in
- the last processed ID

If the client is routed to a different replica, they might be surprised.

---

## Ensure that your replicated services are stateless

Stateless services = A type of software application or system that does not store any data or state information related to a user or client's session between different requests.

*How?* 

--

Refactor data to the DB

*What if that's too slow?*

--

- Move some of the data to a distributed in-memory DB, e.g. [redis](https://collabnix.com/getting-started-with-redis-inside-docker-container-in-2-minutes/)
- Use specific tactics: e.g., JWT (JSON Web Tokens)



---
# 3. Where do you keep the database? 

1. Database on Separate VM
2. Database in the Swarm
3. Managed Database


---

## 3.1. Database on Separate VM

![540](images/db_on_separate_vm.png)

- Configure the DB (e.g. MySQL) and firewall on the VM with the DB such that it does not allow connections from outside the swarm
- In the configuration of your API, use the IP of the DB machine

*Advantages?*

--

- Realistic - you often need to connect to services which are not in the swarm 
- No worry about the DB VM becoming loaded with other swarm services

---

### DigitalOcean Example

- VMs in the same region are in the default VPC (defined by subnet mask)
- Easy to configure the firewall to only accept connections from IPs in the local subnet

![](images/default_vpc.png)



---
## Configuring Firewall from the DO Dashboard

![](images/configuring_firewall.png)

---

## 3.2. Database in the Swarm

- The DB is also part of your swarm stack
- Use placement constraints to ensure DB task always on the same VM
- In the configuration for your API use the service name from the docker-compose file
- DB data mapped in persistent volume

Advantages
- this removes the need to firewall and configure the DB to prevent possible external access -- it is only visible from the swarm overlay network 

---

## Variation: using a managed volume

![400](images/external_volume.png)

Advantage: easily changing VMs for the DB

---

## 3.3. Managed Database

![600](images/price_for_managed_db.png)

- You connect to it with an explicit IP as you did also in the DB in the Separate VM 
- You still have to configure connection rules and firewall for that VM but this time via the DigitalOcean CLI tool, REST API, or by clicking around (but that's not cool)
- Downside: more expensive than the cheapest VM






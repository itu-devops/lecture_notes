-----------


# Your turn now: Scale!


Either 

  * create a high-available setup with _hot_ and _standby_ server for your MiniTwit, or
    - you don't need to replicate the load balancer too; suffices to replicate your server

Or: 

  * create a Docker Swarm cluster for your MiniTwit in which all components run as services.
  
  
In both cases implement a rolling update strategy in your build chain.



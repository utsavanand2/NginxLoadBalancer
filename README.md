# A NodeJS app loadbalanced with Nginx as a frontend proxy

## Make sure you have docker installed on your host machine

## To launch the application

```
cd nginxLoadBalancer

# if running the application for the first time or after making any changes
docker-compose up --build

# else run the command below
docker-compose up

# to stop the running containers
docker-compose down
```
## To get response from the application, you can use curl, just open a new terminal window and run
```
while true; do curl localhost; echo; sleep 1; done;
```
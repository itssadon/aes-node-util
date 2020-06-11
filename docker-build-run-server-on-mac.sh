#!/bin/bash

#$1 is for container name eg aes-node-util
#$2 is for image name eg itssadon/aes-node-util

docker stop $1
docker rm $1
docker image rm $2
docker build -t $2 .
docker run -d --name $1 -p 4545:4545 $2
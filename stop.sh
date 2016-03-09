#!/bin/bash

eval "$(docker-machine env default)"
cd ./hub
docker-compose stop
docker-compose rm -f

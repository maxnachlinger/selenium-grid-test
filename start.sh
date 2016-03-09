#!/bin/bash

eval "$(docker-machine env default)"
cd ./hub
docker-compose up -d
docker-compose scale firefox=2
open http://`docker-machine ip default`:4444/grid/console

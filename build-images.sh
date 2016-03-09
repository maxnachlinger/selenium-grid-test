#!/bin/bash

# Setup the machine environment in your current terminal
eval "$(docker-machine env default)"

# remove existing images
docker rmi selenium/firefox
docker rmi selenium/hub
docker rmi selenium/base

# cd to the selenium-grid/base dir and build the base image
cd ./base

# -t names the created image, --rm keeps your hard-drive tidy
docker build -t selenium/base --rm=true .

# now build the hub image
cd ../hub
docker build -t selenium/hub --rm=true .

# now build the firefox image
cd ../firefox
docker build -t selenium/firefox --rm=true .

cd ..

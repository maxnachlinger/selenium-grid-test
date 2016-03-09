#!/bin/bash
cd ./hub
docker-compose up -d
docker-compose scale firefox=2

This repo contains only a little original content, most of it is from this [awesome blog post](http://www.conductor.com/nightlight/running-selenium-grid-using-docker-compose/) :)

### Docker Installation (Mac)
Install Docker Toolbox: https://www.docker.com/docker-toolbox

Open terminal and type/paste the following:

```shell
# Create the "default" VM - with 10 Gb disk
docker-machine create \
--driver virtualbox \
--virtualbox-disk-size "10000" \
default
```

### Setting up the grid
```shell
# cd to the selenium-grid dir and build the docker images
cd ./selenium-grid/
./build-images.sh

# start up the grid
./start.sh

# stop the grid
./sotp.sh

# edit start.sh to scale up more workers etc
```

### Run the test client app
```shell
cd ./selenium-grid/testClientApp
npm i
node index.js
```

### PS: More Docker commands
See also: the [docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet)

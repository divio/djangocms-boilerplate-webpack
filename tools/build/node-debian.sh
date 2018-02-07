#!/bin/bash
set -e

source $NVM_DIR/nvm.sh

# ensure python2 is available by name for gyp
apt-get update && apt-get install -y python2.7 --no-install-recommends
ln -s /usr/bin/python2.7 /usr/bin/python2

nvm install $NODE_VERSION
nvm alias default $NODE_VERSION
nvm use default

npm install -g npm@"$NPM_VERSION"
npm install -g gulp bower

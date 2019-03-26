#!/bin/bash
set -e

source $NVM_DIR/nvm.sh

RUN apt-get update -y && \
    apt-get install -y build-essential --no-install-recommends

# ensure python2 is available by name for gyp
if [ ! -f /usr/bin/python2 ]; then
  apt-get install -y python2.7 --no-install-recommends
  ln -sn /usr/bin/python2.7 /usr/bin/python2
fi

nvm install $NODE_VERSION
nvm alias default $NODE_VERSION
nvm use default

npm install -g npm@"$NPM_VERSION"
npm install -g gulp bower

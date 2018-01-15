#!/bin/sh

set -e

SCRIPT=$(readlink -f "$0")
BASEDIR=$(dirname "$SCRIPT")
OS_RELEASE=$(cat /etc/os-release | grep "^ID=" | cut -d= -f2)

if [ $OS_RELEASE = "debian" ]
then
    bash ${BASEDIR}/node-${OS_RELEASE}.sh
    export NODE_PATH=$NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules \
      PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH  
else
    sh ${BASEDIR}/node-${OS_RELEASE}.sh
fi

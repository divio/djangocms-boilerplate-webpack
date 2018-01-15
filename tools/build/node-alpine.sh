#!/bin/sh
set -e

# Node installation for Alpine systems
apk update

# Get exact package version where rN isn't known
NODE_APK_REV=$(apk search nodejs | grep nodejs-$NODE_VERSION | rev | cut -d'-' -f1 | rev )
NODE_APK=nodejs@edge=$NODE_VERSION-$NODE_APK_REV

# Intentionally using NODE version for NPM
NPM_APK_REV=$(apk search nodejs-npm | grep nodejs-npm-$NODE_VERSION | rev | cut -d'-' -f1 | rev )
NPM_APK=nodejs-npm@edge=$NODE_VERSION-$NPM_APK_REV

apk add python2 libuv@edge $NODE_APK $NPM_APK

npm install npm@"$NPM_VERSION"
npm install -g gulp bower


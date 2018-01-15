# <DOCKER_FROM>
# </DOCKER_FROM>

# <NODE>
ADD tools/build /stack/boilerplate

ENV NODE_VERSION=8.9.4 \
    NPM_VERSION=5.4.0

RUN sh /stack/boilerplate/install.sh
# </NODE>

# <DOCKER_BUILD>
# </DOCKER_BUILD>

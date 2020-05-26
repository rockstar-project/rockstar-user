#!/bin/sh

ng build
docker build -t rockstar/rockstar-app .
docker tag rockstar/rockstar-app:latest $DOCKER_REGISTRY_URL/rockstar/rockstar-app:0.0.1
docker login -u $DOCKER_USER -p $DOCKER_PASSWORD https://$DOCKER_REGISTRY_URL
docker push $DOCKER_REGISTRY_URL/rockstar/rockstar-app:0.0.1

oc login $OPENSHIFT_URL --token=$OPENSHIFT_TOKEN
oc delete -f kubernetes/.
oc create -f kubernetes/.

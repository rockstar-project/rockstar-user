## Deployment Steps

### Build angular app
```
ng build
```

### Create & push docker image
```
docker build -t rockstar/rockstar-app .
docker tag rockstar/rockstar-app:latest $DOCKER_REGISTRY_URL/rockstar/rockstar-app:0.0.1
docker login -u $DOCKER_USER -p $DOCKER_PASSWORD https://$DOCKER_REGISTRY_URL
docker push $DOCKER_REGISTRY_URL/rockstar/rockstar-app:0.0.1
```

### Deploy app in openshift
```
oc login $OPENSHIFT_URL --token=$OPENSHIFT_TOKEN
oc create -f kubernetes/.
```
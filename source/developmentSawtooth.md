# Hyperledger Sawtooth's Application Development Practices

Certain practices can help developer create application which are one click deployable on Zeeve. They are:-

* For packaging your product to be automated by Zeeve, you will need to [dockerize](https://docs.docker.com/engine/examples/) you project's services by creating Dockerfiles for them. 

* Create a `docker-compose-build.yaml` file creating images of all services that your application requires. This will help Zeeve to create relevant images and push it to the container-registry and later use it.

* Make sure all the config that your application needs are pre-created in the Docker image itself.

* Create a `docker-compose-zeeve.yaml` file and keep it at your root project folder. The file shall have references to the image names mentioned in the docker-compose-build.yaml. There is no need to mention any built contexts for images here, image name shall do.

* All ports utlized by sawtooth services are curently set to default, so make sure you applications are configured to use default host machine's ports.
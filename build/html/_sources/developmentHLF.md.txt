# Hyperledger Fabric's Application Development Practices

Certain practices can help developer create application which are one click deployable on Zeeve. They are:-

* For packaging your product to be automated by Zeeve, you will need to [dockerize](https://docs.docker.com/engine/examples/) you project's services by creating Dockerfiles for them. 

* Make use of `network-config.yaml`(connections profiles) and `org.yaml`s(if required) for all blockchain related configurations. At the time of deployment of a network, Zeeve creates a these files and allows developer to download them along with the other artifacts. You can consider this file to develop your applications. All other apllicational config shall be part of the Docker image itself.



* Create a `docker-compose-build.yaml` file creating images of all services that your application requires. This will help Zeeve to create relevant images and push it to the container-registry and later use it.


* Create a kuberenetes file `k8_application.yaml` and keep it at your root project folder. The file needs to keep following points in account:-

...


* While uploading the project attach some supporting documents to explain the organisation names and other details that shall be put while creating networks for the product. These documents will help users to create and deploy networks and products on their own.
 
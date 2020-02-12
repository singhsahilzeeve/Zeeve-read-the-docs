# Hyperledger Fabric's Application Development Practices

Refer to [Sample Project](https://github.com/sanyam-gupta583/balance-transfer-zeeve)
  
Certain practices can help the developer create applications which are one click deployable on Zeeve. They are:-
  
* For packaging your product to be automated by Zeeve, you will need to [dockerize](https://docs.docker.com/engine/examples/) your project's services by creating `Dockerfiles` for them.
  ```
  FROM node:8.9.0
  
  WORKDIR /balance-transfer
  
  COPY . .
  ENV PORT=4000
  RUN npm install
  CMD node app
  ```
  
* Make use of `network-config.yaml` (connections profiles) and `org.yaml` (if required) for all blockchain related configurations. At the time of deployment for a network, Zeeve creates these files and allows the developer to download them along with the other artifacts. You can consider this file to develop your applications. All other application configs should be part of the Docker image itself.
  
* Create a `.env` file containing an array of domain prefixes corrosponding to Ingress resource definitions. The syntax should be of the form: 
    `("<domain_prefix_1>:<ingress_resource_name_1>" "<domain_prefix_2>:<ingress_resource_name_2> ...")`
  ```
  EXT_EXPOSED_SERVICES=("balancetranfer:balance-transfer-ingress")
  ```  
* Create a `docker-compose-build.yaml` file for creating images of all services that your application requires. This will help Zeeve create relevant images, push them to the container-registry and later use them.
    -  Each service definition whose container image would be created needs to have an `image` keyword, the associated value needs to same as that of image name (Deployment.contianers.spec.containers.image) in k8_application.yaml.template.

  ```
  version: "2.0"
  
  services:
    balance-transfer:
      build:
        context: .
        dockerfile: Dockerfile
      image: balance-transfer:latest
      container_name: balance-transfer-default
      ports:
        - '4000:4000'
      command: |
        bash -c "PORT=4000 node app"
      restart: always
      
  ```
  
* Create a yaml file `k8_application.yaml.template` and keep it at your project's root folder.
  The file needs to keep the following points in account:-
    - The image name for containers needs to adhere to the guideline outlined in the step above.
    - Define an `imagePullSecrets` named container-registry-cred. Creation and updation of this secret is handled by Zeeve, but the definition is developers responsibility.  
    - For mounting relevant crypto data and channel artifacts in a deployment, Zeeve will create secrets and mount them on `/crypto-data` path. The deployment/s on which this mounting takes place is identified by special character string `@@replace_my_crypto_artifacts@@`. 
    - Host for each Ingress resource will be an amalgamation of information specified in .env file and domain assigned to your Kubernetes cluster.
    - Take special care to mount relevant persistent volumes as pods will be recreated whenever there is an application update.

  ```
  apiVersion: v1
  kind: Service
  metadata:
    name: balance-transfer-svc
  spec:
    type: ClusterIP
    ports:
      - port: 4000
        targetPort: 4000
        protocol: TCP
    selector:
      name: balance-transfer-dep
  
   ---
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: balance-transfer-dep
  spec:
    replicas: 1
    selector:
      matchLabels:
        name: balance-transfer
    template:
      metadata:
        labels:
          name: balance-transfer
      spec:
        volumes:
          #- name: balance-transfer-data
          #  persistentVolumeClaim:
          #    claimName: balance-transfer-data-pvc
              @@replace_my_crypto_artifacts@@
        imagePullSecrets:
        - name: container-registry-cred
        containers:
          - name: balance-transfer
            image: balance-transfer:12
            imagePullPolicy: Always
            ports:
              - containerPort: 4000
                protocol: TCP
            #livenessProbe:
            #  httpGet:
            #    path: /
            #    port: 4000
            command:
              - bash
              - -c
              - |
                echo "installing GO" 
                cd /usr/local
                curl -O https://dl.google.com/go/go1.10.3.linux-amd64.tar.gz
                tar -xvf go1.10.3.linux-amd64.tar.gz
                echo "export PATH=$PATH:/usr/local/go/bin" >> /root/.bashrc
                source /root/.bashrc
  
                echo "configuring application"
                mkdir /application
                cd /application
                cp -r /balance-transfer/* ./
                cp -Lr /crypto-data/* ./artifacts/
                #npm install
                node app
            volumeMounts:
              #- mountPath: /application
              #  name: balance-transfer-data
                @@replace_my_crypto_artifacts@@
  ---
  kind: PersistentVolumeClaim
  apiVersion: v1
  metadata:
    name: balance-transfer-data-pvc
  spec:
    accessModes:
      - "ReadWriteOnce"
    resources:
      requests:
        storage: "5Gi"
  
  ---
  apiVersion: extensions/v1beta1
  kind: Ingress
  metadata:
    name: balance-transfer-ingress
    annotations:
      kubernetes.io/ingress.class: nginx
      nginx.ingress.kubernetes.io/backend-protocol: "http"
  spec:
    rules:
      - host: 
        http:
          paths:
          - backend:
              serviceName: balance-transfer-svc
              servicePort: 4000
  
  ```  
* While uploading the project attach some supporting documents to explain the organisation names and other details that shall be put while creating networks for the product. These documents will help users to create and deploy networks and products on their own.
 
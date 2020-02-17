# How to create my first Network?

Zeeve makes the process of blockchain network deployment from a long time consuming one to just a matter of few clicks whilst taking care of the most important bits.

With a handful of steps using [Zeeve](https://zeeve.io), it has become so easy to create your own blockchain network. These networks can also be altered as per the need of the required deployment with the help of  given protocol specific parameters that helps you align with your desired network performance.

<!-- Currently we have restricted for below mentioned with which user can create the Blockchain network. Initially you should choose your blockchain platform -->


### Selecting A Blockchain Protocol

So to go ahead with the network creation, you first need to decide and pick one blockchain protocol out of these major ones, which looks the best fit for your usecase:

> *   [Hyperledger Sawtooth](./Glossary.html#hyperledger-sawtooth)
> *   [Hyperledger Fabric](./Glossary.html#hyperledger-fabric)
> *   [Ethereum](./Glossary.html#ethereum)
> *   [Credits](./Glossary.html#credits)
> *   [Corda](./Glossary.html#corda)

![](images/CreateNetworkPage.JPG)

After selecting the protocol just configure your network as per the desired network parameters and then you are good to go. To see protocol specific configuration parameters please refer to the detailed deployment spec using the following links.
<!-- These are the logs coming while creating a [network](./Glossary.md) -->

> *   [Hyperledger Sawtooth Deployment Specifications](./HyperledgerSawtooth.md)
> *   [Hyperledger Fabric Deployment Specifications](./HyperledgerFabric.md)
> *   [Ethereum  Deployment Specifications](./Ethereum.md)
> *   [Credits Deployment Specifications](./Credits.md)
> *   [Corda Deployment Specifications](./Corda.md)

## Cloud Configuration

<!--   Here multiple cloud network available users can choose the cloud as per choice. -->
  Choose a cloud* to deploy the network and configure the following settings :

> *   **Name of Network**
> *   **Location**
> *   **Type of Instance**
> *   **Number of Instances**

<i><small>(*Make sure you have authorized Zeeve to connect to your desired cloud account. Not done it yet? Head to [Cloud Authorizations](./cloud_authorization).)</small></i>

![](images/CloudConfigurationPage.JPG)

## Exploring Your Network

Zeeve also provides you with just a few insights about your network, ranging from what happens while Zeeve is bringing it up & beyond. 

### TaskBar
To track every bit of the network lifecycle. Just switch to the tasks section to get an essence of what all Zeeve is actually doing for you on just a few clicks of yours.

This is how a taskbar looks after placing a few back to back network creation requests.
<!-- These are the logs coming while creating a [network](./Glossary.md) -->

![](images/NetworkingCreationPage.JPG)

### Node Listing

You can also view the nodes related to your network. Once nodes have been created they will be displayed with an **Online** status. User can click a node to view the individual node details.

![](images/NodesPage.JPG)
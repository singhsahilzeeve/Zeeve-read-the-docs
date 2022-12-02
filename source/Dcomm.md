# Dcomm Staking Node Setup

**NOTE** [Purchase](./subscriptions.md) a subscription before proceeding.

1. [Create a network](#create-a-network)
2. [Add an additional node](#add-additional-node-to-a-network)
3. [Delete a node](#delete-node-in-a-network)
4. [Delete a network](#delete-a-network)

---

### **Create a network**

This section will provide you detailed steps for creating a network of **Dcomm**.

On the **Network Configuration** page you will be able to see different configuration cards for Dcomm, which looks similar to the image provided below.

![](images/dcomm/dcommNetworkConfiguration.png)

**\*NOTE:** These configuration cards can be different based on your purchased subscriptions.\*

---

You can Choose **Zeeve Managed Cloud** or you can use your cloud account (AWS/DO) for the infrastructure of your node.

Choose the card with the configuration you want. Clicking on the card you will be redirected to the network setup page.

1. **Network Info**

   ![](images/dcomm/dcommCreateNetwork-1.png)
   &nbsp;

   > - **Network Name**: A name to identify your network.
   > - **Deployment Type**: Deployment type
   > - **Network Type**
   >   - **Melbourne Testnet**: This will deploy your network on the network testnet. you can use this for your non-production needs like testing or demonstrations.
   > - **Workspace**: This represents the workspace in which the network will be added after the successful creation.

   Proceed further by clicking on the **Next Step** button after providing all the details.

2. **Cloud Configuration**

   This step configures the cloud settings for your node. This step can vary based on your selection of **Network configuration card**

   1. [Zeeve Manged Cloud](#zeeve-managed-cloud)
   2. [Bring Your Own Cloud (BYOC)](#bring-your-own-cloud)

---

#### Zeeve Managed Cloud

---

In the case of **Managed - Cloud**, select the region for the network under **Select Region** and provide a name to your node.<br></br>

![](images/dcomm/dcommCreateNetworkMANAGED.png)
&nbsp;

> - **Node Name**: A name to identify your node, this field requires a unique name. Unique means that it should be unique in a network to which you are adding a node.
> - **Region**: It indicates the region of the cloud service. These regions are the geographic locations where your network instances are going to be hosted.

For better understanding of which region is best for you please refer the following

New York City, The US: NYC1, NYC3<br/>
San Francisco, The US: SFO2<br/>
Toronto, Canada: TOR1<br/>
London, United Kingdom: LON1<br/>
Frankfurt, Germany: FRA1<br/>
Amsterdam, the Netherlands: AMS3<br/>
Bangalore, India: BLR1<br/>

---

#### Bring Your Own Cloud

---

In the case of **BYOC** (AWS or Digital Ocean), select the region for the network by clicking on **Select Region**, select the [Cloud](./cloud_authorization.md) account you want to use by clicking on **Select Cloud Account**, choose the instance type as your requirement by clicking on **Select Instance Type** and provide a name to your node.<br></br>

![](images/dcomm/dcommCreateNetworkBYOC.png)
&nbsp;

> - **Node Name**: A name to identify your node, this field requires a unique name. Unique means that it should be unique in a network to which you are adding a node.
> - **Region**: It indicates the region of cloud service. These regions are the geographic locations where your network instances are going to be hosted.
> - **Cloud Account**: It represents the cloud account that is going to be used for network creation.
> - **Type of Instance**: It defines the combination of CPU cores and memory. Choose the configuration which could handle loads of your network. This parameter is useful for scaling up the network. The type of Instances may vary from cloud to cloud.

---

3. On clicking the **Create** button a pop-up window will open which ensures the successful creation of your network.

   ![](images/createNetworkSuccessModal.png)
   &nbsp;

4. On clicking the **Continue** button you will be redirected to the page where you can see the network you created.

---

### **Add additional node to a network**

This section will guide you on how you can add an additional node to a network. As you have already created a network, follow these steps to add more nodes to the network.

1. Visit the network detail page. Click on the _Actions_ button on the top right, and select the **Add Node** option.

   ![](images/dcomm/dcommNetworkActions.png)
   &nbsp;

2. You will be redirected to the node setup page. Fill the name for the new node, network type and deployment type will be prefilled based on the network configuration. Click on the **Next** button to continue.

   ![](images/dcomm/dcommAddNode-1.png)
   &nbsp;

3. Select the instance type for the node, cloud account and region will be prefilled based on the network configuration. Click on the **Create** button and the node will be added.
   ![](images/dcomm/dcommAddNode-2.png)
   &nbsp;

**_NOTE_** For Zeeve Managed Cloud, the option for selecting the instance type will not be available as it will be selected by [Zeeve](https://zeeve.io).

---

### **Delete node in a network**

1. Select the network, in which you want to perform the delete node action, and click on the network card [Ref.](./View_your_network_and_nodes.md). You will get to see a page similar to the below image.

   ![](images/dcomm/dcommNetworkActions.png)
   &nbsp;

2. Click on the delete icon present alongside the node. A pop-up window will open for the confirmation, click on the **Yes** button to confirm.

   ![](images/dcomm/dcommDeleteNodeModal.png)
   &nbsp;

---

### **Delete a network**

1. Visit the network detail page[Ref.](./View_your_network_and_nodes.md). Click on the _Actions_ button on the top right, and select the **Delete Network** option.

   ![](images/dcomm/dcommNetworkActions.png)
   &nbsp;

2. A confirmation window will open, click on the **Yes** button to delete the network.

   ![](images/dcomm/dcommDeleteNetworkModal.png)
   &nbsp;

---

**_NOTE_** It will take a few minutes to delete a network.

---

### **Supported API methods**

Just like any other protocol, **Dcomm** supports JSON RPC API call, which can be called to retrive the the information. **Dcomm** supports both **HTTP** as well as **WS(WebSocket)** JSON RPC methods.

#### HTTP
   - ACT-Chain URL - `https://node_url/ext/bc/ACT/rpc`.
   - AST-Chain URL - `https://node_url/ext/bc/AST`.
   - ATH-Chain URL - `https://node_url/ext/bc/ATH`.

###### Example
   ```JS
      import axios from "axios";
      
      const data = JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "eth_blockNumber",
        "params": []
      });
      
      const config = {
        method: 'post',
        url: 'https://node_url/ext/bc/ACT/rpc',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
   ```

###### Available HTTP methods

| Method | Example| Summary|
|---|---|---|
| dvm.buildGenesis | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-buildgenesis-js) | *Given a JSON representation of this Virtual Machine’s genesis state, create the byte representation of that state.* |
| dvm.createAddress | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createaddress-js) | *Create a new address controlled by the given user.* |
| dvm.createAsset | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createasset-js) | *Create a new variable-cap, fungible asset. No units of the asset exist at initialization. Minters can mint units of this asset using createMintTx, signMintTx and issueTx. The asset can be sent with dvm.send.* |
| dvm.createFixedCapAsset | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createfixedcapasset-js) | *Create a new fixed-cap, fungible asset. A quantity of it is created at initialization and then no more is ever created. The asset can be sent with dvm.send.* |
| dvm.createNFTAsset | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createnftasset-js) | *Create a new non-fungible asset. No units of the asset exist at initialization. Minters can mint units of this asset using mintTx and signMintTx. The asset can be sent with dvm.sendNFT.* |
| dvm.createVariableCapAsset | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createvariablecapasset-js) | *Create a new variable-cap, fungible asset. No units of the asset exist at initialization. Minters can mint units of this asset using createMintTx, signMintTx and issueTx. The asset can be sent with dvm.send.* |
| dvm.export | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-export-js) | *Export a non-DCM asset from the AST-Chain to the ACT-Chain. After calling this method, you must call the ACT-Chain’s import method to complete the transfer.* |
| dvm.exportKey | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-exportkey-js) | *Get the private key that controls a given address. The returned private key can be added to a user with dvm.importKey.* |
| dvm.getAddressTxs | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getaddresstxs-js) | *Returns all transactions that change the balance of the given address. A transaction is said to change an address's balance if either is true: A UTXO that the transaction consumes was at least partially owned by the address. A UTXO that the transaction produces is at least partially owned by the address. Note: Indexing (index-transactions) must be enabled in the ACT-chain config.* |
| dvm.getAllBalances | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getallbalances-js) | *Get the balances of all assets controlled by a given address.* |
| dvm.getAssetDescription | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getassetdescription-js) | *Get information about an asset.* |
| dvm.getBalance | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getbalance-js) | *Get the balance of an asset controlled by a given address.* |
| dvm.getTx | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-gettx-js) | *Returns the specified transaction.* |
| dvm.getTxStatus | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-gettxstatus-js) | *Get the status of a transaction sent to the network.* |
| dvm.getUTXOs | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getutxos-js) | *Get the UTXOs that reference a given address.* |
| dvm.import | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-import-js) | *Finalize a transfer of DCM from either the ATH-Chain to the AST-Chain or the ACT-Chain to the AST-Chain. Before this method is called, you must call either the ATH-Chain’s exportDCM method or the ACT-Chain’s exportDCM method to initiate the transfer.* |
| dvm.importKey | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-importkey-js) | *Give a user control over an address by providing the private key that controls the address.* |
| dvm.listAddresses | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-listaddresses-js) | *List addresses controlled by the given user.* |
| dvm.mint | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-mint-js) | *Create an unsigned transaction to mint more of a variable-cap asset (an asset created with dvm.createVariableCapAsset.)* |
| dvm.mintNFT | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-mintnft-js) | *Mint more of a non-fungible asset (an asset created with dvm.createNFTAsset.)* |
| dvm.send | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-send-js) | *Send a quantity of an asset to an address.* |
| dvm.sendMultiple | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-sendmultiple-js) | *Send a quantity of an asset to an address.* |
| dvm.sendNFT | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-sendnft-js) | *Send a quantity of an asset to an address.* |
| health.health | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-health-health-js) | *Get health check on this node.* |
| eth_baseFee | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_basefee-js) | *Get the base fee for the next block.* |
| eth_blockNumber | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_blocknumber-js) | *Getting the most recent block number.* |
| eth_call | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_call-js) | *Call a contract.* |
| eth_chainId | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_chainid-js) | *Not well documented in JSON-RPC references. See instead EIP694.* |
| eth_getAssetBalance | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getassetbalance-js) | *Getting an account’s non-DCM balance.* |
| eth_getBalance | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getbalance-js) | *Getting an account’s balance.* |
| eth_maxPriorityFeePerGas | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_maxpriorityfeepergas-js) | *Getting an account’s balance.* |
| eth_getTransactionCount | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_gettransactioncount-js) | *Getting an account’s nonce.* |
| eth_sendRawTransaction | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_sendrawtransaction-js) | *Send a raw transaction.* |
| eth_getBlockByHash | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getblockbyhash-js) | *Getting a block by hash.* |
| eth_getBlockByNumber | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getblockbynumber-js) | *Getting a block by number.* |
| eth_getTransactionByHash | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_gettransactionbyhash-js) | *Getting a transaction by hash.* |
| eth_getTransactionReceipt | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_gettransactionreceipt-js) | *Getting a transaction receipt.* |
| dcm.export | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-export-js) | *Getting a transaction receipt.* |
| dcm.exportKey | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-exportkey-js) | *Get the private key that controls a given address.The returned private key can be added to a user with dvm.importKey.* |
| dcm.getAtomicTx | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-getatomictx-js) | *Returns the specified transaction.* |
| dcm.getAtomicTxStatus | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-getatomictxstatus-js) | *Get the status of a transaction sent to the network.* |
| dcm.getUTXOs | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-getutxos-js) | *Get the UTXOs that reference a given address.* |
| dcm.import | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-import-js) | *Send DCM from the AST-Chain to an account on the ATH-Chain. After calling this method, you must call the ATH-Chain’s DCM method to complete the transfer..* |
| dcm.importKey | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-importkey-js) | *Give a user control over an address by providing the private key that controls the address.* |
| net_version | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-net_version-js) | *Getting the network ID.* |
| web3_clientVersion | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-web3_clientversion-js) | *Getting the current client version.* |
| web3_sha3 | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-web3_sha3-js) | *Calculate a cryptographic hash.* |
| index.getLastAccepted (AST Transactions) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-js) | *Get the most recently accepted container.* |
| index.getContainerByIndex (AST Transactions) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-js) | *Get container by index. The first container accepted is at index 0, the second is at index 1, etc.* |
| index.getContainerByID (AST Transactions) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-js) | *Get container by ID.* |
| index.getContainerRange (AST Transactions) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-js) | *Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].* |
| index.getIndex (AST Transactions) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-vertices-js) | *Get a container's index.* |
| index.isAccepted (AST Transactions) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-js) | *Returns true if the container is in this index.* |
| index.getLastAccepted (AST Vertices) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-verticies-js) | *Get the most recently accepted container.* |
| index.getContainerByIndex (AST Vertices) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-vertices-js) | *Get container by index. The first container accepted is at index 0, the second is at index 1, etc.* |
| index.getContainerByID (AST Vertices) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-vertices-js) | *Get container by ID.* |
| index.getContainerRange (AST Vertices) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-vertices-js) | *Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].* |
| index.getIndex (AST Vertices) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-vertices-js) | *Get a container's index.* |
| index.isAccepted (AST Vertices) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-vertices-js) | *Returns true if the container is in this index.* |
| index.getLastAccepted (ATH Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-ath_block-js) | *Get the most recently accepted container.* |
| index.getContainerByIndex (ATH Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-ath_block-js) | *Get container by index. The first container accepted is at index 0, the second is at index 1, etc.* |
| index.getContainerByID (ATH Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-ath_block-js) | *Get container by ID.* |
| index.getContainerRange (ATH Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-ath_block-js) | *Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].* |
| index.getIndex (ACT Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-ath_block-js) | *Get a container's index.* |
| index.isAccepted (ACT Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-ath_block-js) | *Returns true if the container is in this index.* |
| index.getLastAccepted (ACT Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-act_block-js) | *Get the most recently accepted container.* |
| index.getContainerByIndex (ACT Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-act_block-js) | *Get container by index. The first container accepted is at index 0, the second is at index 1, etc.* |
| index.getContainerByID (ACT Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-act_block-js) | *Get container by ID.* |
| index.getContainerRange (ACT Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-act_block-js) | *Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].* |
| index.getIndex (ATH Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-act_block-js) | *Get a container's index.* |
| index.isAccepted (ATH Blocks) | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-act_block-js) | *Returns true if the container is in this index.* |
| info.getBlockchainID | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getblockchainid-js) | *Given a blockchain’s alias, get its ID.* |
| info.getNetworkID | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnetworkid-js) | *Get the ID of the network this node is participating in.* |
| info.getNetworkName | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnetworkname-js) | *Get the name of the network this node is participating in.* |
| info.getNodeID | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnodeid-js) | *Get the name of the network this node is participating in.* |
| info.getNodeIP | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnodeip-js) | *Get the IP of this node.* |
| info.getNodeVersion | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnodeversion-js) | *Get the version of this node.* |
| info.isBootstrapped | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-isbootstrapped-js) | *Check whether a given chain is done bootstrapping..* |
| info.getTxFee | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-gettxfee-js) | *Get the transaction fee of the network.* |
| info.getVMs | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getvms-js) | *Get the virtual machines installed on this node.* |
| info.uptime | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-uptime-js) | *Returns the network's observed uptime of this node.* |
| info.peers | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-peers-js) | *Get description of peer connections.* |
| authority.addDelegator | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-adddelegator-js) | *Add a delegator to the Default Subnet. A delegator stakes DCM and specifies a validator (the delegatee) to validate on their behalf. The delegatee has an increased probability of being sampled by other validators (weight) in proportion to the stake delegated to them. The delegatee charges a fee to the delegator; the former receives a percentage of the delegator’s validation reward (if any.) The delegation period must be a subset of the perdiod that the delegatee validates the Default Subnet.* |
| authority.addValidator | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-addvalidator-js) | *Add a validator to the Default Subnet.* |
| authority.addSubnetValidator | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-addsubnetvalidator-js) | *Add a validator to a Subnet other than the Default Subnet. The validator must validate the Default Subnet for the entire duration they validate this Subnet.* |
| authority.createAddress | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-createaddress-js) | *Add a delegator to the Default Subnet. A delegator stakes DCM and specifies a validator (the delegatee) to validate on their behalf. The delegatee has an increased probability of being sampled by other validators (weight) in proportion to the stake delegated to them. The delegatee charges a fee to the delegator; the former receives a percentage of the delegator’s validation reward (if any.) The delegation period must be a subset of the perdiod that the delegatee validates the Default Subnet.* |
| authority.createSubnet | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-createsubnet-js) | *Create an unsigned transaction to create a new Subnet. The unsigned transaction must be signed with the key of the account paying the transaction fee. The Subnet’s ID is the ID of the transaction that creates it (ie the response from issueTx when issuing the signed transaction.* |
| authority.getBalance | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getbalance-js) | *Get the balance of an asset controlled by a given address.* |
| authority.getBlockchains | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getblockchains-js) | *Get all the blockchains that exist (excluding the ATH-Chain).* |
| authority.getBlockchainStatus | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getblockchainstatus-js) | *Get the status of a blockchain.* |
| authority.getCurrentSupply | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getcurrentsupply-js) | *Returns an upper bound on the number of DCM that exist. This is an upper bound because it does not account for burnt tokens, including transaction fees.* |
| authority.getTotalStake | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettotalstake-js) | *Get the total amount of nDCM staked on the Primary Network.* |
| authority.getCurrentValidators | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getcurrentvalidators-js) | *Get the total amount of nDCM staked on the Primary Network.* |
| authority.getMaxStakeAmount | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getmaxstakeamount-js) | *Get the total amount of nDCM staked on the Primary Network.* |
| authority.getHeight | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getheight-js) | *Get the total amount of nDCM staked on the Primary Network.* |
| authority.getMinStake | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getminstake-js) | *Get the total amount of nDCM staked on the Primary Network.* |
| authority.getRewardUTXOs | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getrewardutxos-js) | *Returns the UTXOs that were rewarded after the provided transaction's staking or delegation period ended.* |
| authority.getStake | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getstake-js) | *Returns the staked amount for an array of addresses.* |
| authority.getTxStatus | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettxstatus-js) | *Returns the status of a authority chain transaction.* |
| authority.getPendingValidators | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getpendingvalidators-js) | *List the validators in the pending validator set of the specified Subnet. Each validator is not currently validating the Subnet but will in the future.* |
| authority.getStakingAssetID | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getstakingassetid-js) | *Retrieve an assetID for a subnet’s staking asset. Currently this always returns the Primary Network’s staking assetID.* |
| authority.getSubnets | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getsubnets-js) | *Get all the Subnets that exist.* |
| authority.getTx | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettx-js) | *Returns the specified transaction.* |
| authority.getTimestamp | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettimestamp-js) | *Returns the specified transaction.* |
| authority.getUTXOs | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getutxos-js) | *Get the UTXOs that reference a given address.* |
| authority.getValidatorsAt | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getvalidatorsat-js) | *Get the validators and their weights of a subnet or the Primary Network at a given ATH-Chain height.* |
| authority.exportDCM | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-exportdcm-js) | *Send DCM from an account on the ACT-Chain to an address on the AST-Chain. This transaction must be signed with the key of the account that the DCM is sent from and which pays the transaction fee. After issuing this transaction, you must call the AST-Chain’s importDCM method to complete the transfer.* |
| authority.exportKey | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-exportkey-js) | *Get the private key that controls a given address. The returned private key can be added to a user with authority.importKey.* |
| authority.importDCM | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-importdcm-js) | *Complete a transfer of DCM from the AST-Chain to the ACT-Chain. Before this method is called, you must call the AST-Chain’s exportDCM method to initiate the transfer.* |
| authority.importKey | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-importkey-js) | *Give a user control over an address by providing the private key that controls the address.* |
| authority.listAddresses | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-listaddresses-js) | *List the addresses controlled by the given user.* |
| authority.sampleValidators | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-samplevalidators-js) | *Sample validators from the specified Subnet.* |
| authority.validatedBy | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-validatedby-js) | *Get the Subnet that validates a given blockchain.* |
| authority.validates | [code](https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-validates-js) | *Get the IDs of the blockchains a Subnet validates.* |

---

#### WebSocket
   - ACT-Chain URL - `wss://node_url/ext/bc/C/ws`.

**\*NOTE:** As of now only **Action Chain** supports WS RPC methods.

###### Example
   ```JS
      import WebSocket from 'ws';
      
      const ws = new WebSocket('wss://node_url/ext/bc/ACT/ws');
      
      ws.on('open', function open() {
              console.log('connected');
      
        // NOTE : use delay to avoid missing messages from server
              setTimeout(() => {
                      const msg = {"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1};
              ws.send(JSON.stringify(msg));
        }, 1000);
      });
      
      ws.on('message', function message(data) {
        console.log('received: %s', data);
      });
   ```

###### Available WebSocket Methods

| Method | Summary|
|---|------------|
| eth_baseFee |  *Get the base fee for the next block.* |
| eth_blockNumber |  *Getting the most recent block number.* |
| eth_call | *Call a contract.* |
| eth_chainId | *Not well documented in JSON-RPC references. See instead EIP694.* |
| eth_getAssetBalance |  *Getting an account’s non-DCM balance.* |
| eth_getBalance |  *Getting an account’s balance.* |
| eth_maxPriorityFeePerGas |  *Getting an account’s balance.* |
| eth_getTransactionCount |  *Getting an account’s nonce.* |
| eth_sendRawTransaction |  *Send a raw transaction.* |
| eth_getBlockByHash | *Getting a block by hash.* |
| eth_getBlockByNumber | *Getting a block by number.* |
| eth_getTransactionByHash |  *Getting a transaction by hash.* |
| eth_getTransactionReceipt |  *Getting a transaction receipt.* |
| dcm.export |  *Getting a transaction receipt.* |
| dcm.exportKey |  *Get the private key that controls a given address.The returned private key can be added to a user with dvm.importKey.* |
| dcm.getAtomicTx |  *Returns the specified transaction.* |
| dcm.getAtomicTxStatus |  *Get the status of a transaction sent to the network.* |
| dcm.getUTXOs |  *Get the UTXOs that reference a given address.* |
| dcm.import |  *Send DCM from the AST-Chain to an account on the ATH-Chain. After calling this method, you must call the ATH-Chain’s DCM method to complete the transfer..* |
| dcm.importKey |  *Give a user control over an address by providing the private key that controls the address.* |
| net_version |  *Getting the network ID.* |
| web3_clientVersion |  *Getting the current client version.* |
| web3_sha3 |  *Calculate a cryptographic hash.* |
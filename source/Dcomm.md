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

   <br/>
   
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

   <br/>


###### Available HTTP methods

   <br/>

   ⚙️ *****dvm.buildGenesis*****
  
   <blockquote>
   <p>Given a JSON representation of this Virtual Machine’s genesis state, create the byte representation of that state.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-buildgenesis-js">Nodejs</a></p>

   <br/>


   ⚙️ *****dvm.createAddress*****
       
   <blockquote>
   <p>Create a new address controlled by the given user.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createaddress-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.createAsset*****
  
   <blockquote>
   <p>Create a new variable-cap, fungible asset. No units of the asset exist at initialization. Minters can mint units of this asset using createMintTx, signMintTx and issueTx. The asset can be sent with dvm.send.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createasset-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.createFixedCapAsset*****
  
   <blockquote>
   <p>Create a new fixed-cap, fungible asset. A quantity of it is created at initialization and then no more is ever created. The asset can be sent with dvm.send.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createfixedcapasset-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.createNFTAsset*****
  
   <blockquote>
   <p>Create a new non-fungible asset. No units of the asset exist at initialization. Minters can mint units of this asset using mintTx and signMintTx. The asset can be sent with dvm.sendNFT.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createnftasset-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.createVariableCapAsset*****
  
   <blockquote>
   <p>Create a new variable-cap, fungible asset. No units of the asset exist at initialization. Minters can mint units of this asset using createMintTx, signMintTx and issueTx. The asset can be sent with dvm.send.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-createvariablecapasset-js">Nodejs</a></p>

   <br/>


   ⚙️ *****dvm.export*****
  
   <blockquote>
   <p>Export a non-DCM asset from the AST-Chain to the ACT-Chain. After calling this method, you must call the ACT-Chain’s import method to complete the transfer.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-export-js">Nodejs</a></p>

   <br/>
   
   ⚙️ *****dvm.exportKey*****
  
   <blockquote>
   <p>Get the private key that controls a given address. The returned private key can be added to a user with dvm.importKey.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-exportkey-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.getAddressTxs*****
  
   <blockquote>
   <p>Returns all transactions that change the balance of the given address. A transaction is said to change an address's balance if either is true: A UTXO that the transaction consumes was at least partially owned by the address. A UTXO that the transaction produces is at least partially owned by the address. Note: Indexing (index-transactions) must be enabled in the ACT-chain config.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getaddresstxs-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.getAllBalances*****
  
   <blockquote>
   <p>Get the balances of all assets controlled by a given address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getallbalances-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.getAssetDescription*****
  
   <blockquote>
   <p>Get information about an asset.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getassetdescription-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.getBalance*****
  
   <blockquote>
   <p>Get the balance of an asset controlled by a given address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getbalance-js">Nodejs</a></p>

   <br/>
  
   ⚙️ *****dvm.getTx*****
  
   <blockquote>
   <p>Returns the specified transaction.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-gettx-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.getTxStatus*****
  
   <blockquote>
   <p>Get the status of a transaction sent to the network.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-gettxstatus-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.getUTXOs*****
  
   <blockquote>
   <p>Get the UTXOs that reference a given address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-getutxos-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.import*****
  
   <blockquote>
   <p>Finalize a transfer of DCM from either the ATH-Chain to the AST-Chain or the ACT-Chain to the AST-Chain. Before this method is called, you must call either the ATH-Chain’s exportDCM method or the ACT-Chain’s exportDCM method to initiate the transfer.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-import-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.importKey*****
  
   <blockquote>
   <p>Give a user control over an address by providing the private key that controls the address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-importkey-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.listAddresses*****
  
   <blockquote>
   <p>List addresses controlled by the given user.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-listaddresses-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.mint*****
  
   <blockquote>
   <p>Create an unsigned transaction to mint more of a variable-cap asset (an asset created with dvm.createVariableCapAsset).</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-mint-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.mintNFT*****
  
   <blockquote>
   <p>Mint more of a non-fungible asset (an asset created with dvm.createNFTAsset).</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-mintnft-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.send*****
  
   <blockquote>
   <p>Send a quantity of an asset to an address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-send-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.sendMultiple*****
  
   <blockquote>
   <p>Send multiple quantity of an asset to an address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-sendmultiple-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dvm.sendNFT*****
  
   <blockquote>
   <p>Send a quantity of an asset to an address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dvm-sendnft-js">Nodejs</a></p>

   <br/>

   ⚙️ *****health.health*****
  
   <blockquote>
   <p>Get health check on this node.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-health-health-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_baseFee*****
  
   <blockquote>
   <p>Get the base fee for the next block.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_basefee-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_blockNumber*****
  
   <blockquote>
   <p>Getting the most recent block number.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_blocknumber-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_call*****
  
   <blockquote>
   <p>Call a contract.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_call-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_chainId*****
  
   <blockquote>
   <p>Not well documented in JSON-RPC references. See instead EIP694.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_chainid-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_getAssetBalance*****
  
   <blockquote>
   <p>Getting an account’s non-DCM balance.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getassetbalance-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_getBalance*****
  
   <blockquote>
   <p>Getting an account’s balance.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getbalance-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_maxPriorityFeePerGas*****
  
   <blockquote>
   <p>Getting an account’s balance.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_maxpriorityfeepergas-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_getTransactionCount*****
  
   <blockquote>
   <p>Getting an account’s nonce.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_gettransactioncount-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_sendRawTransaction*****
  
   <blockquote>
   <p>Send a raw transaction.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_sendrawtransaction-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_getBlockByHash*****
  
   <blockquote>
   <p>Getting a block by hash.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getblockbyhash-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_getBlockByNumber*****
  
   <blockquote>
   <p>Getting a block by number.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_getblockbynumber-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_getTransactionByHash*****
  
   <blockquote>
   <p>Getting a transaction by hash.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_gettransactionbyhash-js">Nodejs</a></p>

   <br/>

   ⚙️ *****eth_getTransactionReceipt*****
  
   <blockquote>
   <p>Getting a transaction receipt.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-eth_gettransactionreceipt-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dcm.export*****
  
   <blockquote>
   <p>Getting a transaction receipt.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-export-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dcm.exportKey*****
  
   <blockquote>
   <p>Get the private key that controls a given address.The returned private key can be added to a user with dvm.importKey.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-exportkey-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dcm.getAtomicTx*****
  
   <blockquote>
   <p>Returns the specified transaction.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-getatomictx-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dcm.getAtomicTxStatus*****
  
   <blockquote>
   <p>Get the status of a transaction sent to the network.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-getatomictxstatus-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dcm.getUTXOs*****
  
   <blockquote>
   <p>Get the UTXOs that reference a given address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-getutxos-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dcm.import*****
  
   <blockquote>Send DCM from the AST-Chain to an account on the ATH-Chain. After calling this method, you must call the ATH-Chain’s DCM method to complete the transfer. the UTXOs that reference a given address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-import-js">Nodejs</a></p>

   <br/>

   ⚙️ *****dcm.importKey*****
  
   <blockquote>Give a user control over an address by providing the private key that controls the address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-dcm-importkey-js">Nodejs</a></p>

   <br/>

   ⚙️ *****net_version*****
  
   <blockquote>Getting the network ID.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-net_version-js">Nodejs</a></p>

   <br/>

   ⚙️ *****web3_clientVersion*****
  
   <blockquote>Getting the current client version.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-web3_clientversion-js">Nodejs</a></p>

   <br/>

   ⚙️ *****web3_sha3*****
  
   <blockquote>Calculate a cryptographic hash.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-web3_sha3-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getLastAccepted (AST Transactions)*****
  
   <blockquote>Get the most recently accepted container.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByIndex (AST Transactions)*****
  
   <blockquote>Get container by index. The first container accepted is at index 0, the second is at index 1, etc.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByID (AST Transactions)*****
  
   <blockquote>Get container by ID.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerRange (AST Transactions)*****
  
   <blockquote>Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getIndex (AST Transactions)*****
  
   <blockquote>Get a container's index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-vertices-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.isAccepted (AST Transactions)*****
  
   <blockquote>Returns true if the container is in this index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getLastAccepted (AST Vertices)*****
  
   <blockquote>Get the most recently accepted container.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-verticies-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByIndex (AST Vertices)*****
  
   <blockquote>Get container by index. The first container accepted is at index 0, the second is at index 1, etc.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-vertices-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByID (AST Vertices)*****
  
   <blockquote>Get container by ID.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-vertices-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerRange (AST Vertices)*****
  
   <blockquote>Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-vertices-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getIndex (AST Vertices)*****
  
   <blockquote>Get a container's index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-vertices-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.isAccepted (AST Vertices)*****
  
   <blockquote>Returns true if the container is in this index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-vertices-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getLastAccepted (ATH Blocks)*****
  
   <blockquote>Get the most recently accepted container.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-ath_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByIndex (ATH Blocks)*****

   <blockquote>Get container by index. The first container accepted is at index 0, the second is at index 1, etc.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-ath_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByID (ATH Blocks)*****

   <blockquote>Get container by ID.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-ath_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerRange (ATH Blocks)*****

   <blockquote>Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-ath_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getIndex (ACT Blocks)*****

   <blockquote>Get a container's index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-ath_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.isAccepted (ACT Blocks)*****

   <blockquote>Returns true if the container is in this index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-ath_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getLastAccepted (ACT Blocks)*****

   <blockquote>Get the most recently accepted container.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getlastaccepted-act_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByIndex (ACT Blocks)*****

   <blockquote>Get container by index. The first container accepted is at index 0, the second is at index 1, etc.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyindex-act_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerByID (ACT Blocks)*****

   <blockquote>Get container by ID.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerbyid-act_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getContainerRange (ACT Blocks)*****

   <blockquote>Returns containers with indices in [startIndex, startIndex+1, ... , startIndex + numToFetch - 1]. numToFetch must be in [0,1024].</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getcontainerrange-act_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.getIndex (ATH Blocks)*****

   <blockquote>Get a container's index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-getindex-act_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****index.isAccepted (ATH Blocks)*****

   <blockquote>Returns true if the container is in this index.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-index-isaccepted-act_block-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getBlockchainID*****

   <blockquote>Given a blockchain’s alias, get its ID.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getblockchainid-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getNetworkID*****

   <blockquote>Get the ID of the network this node is participating in.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnetworkid-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getNetworkName*****

   <blockquote>Get the name of the network this node is participating in.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnetworkname-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getNodeID*****

   <blockquote>Get the id of the node is participating in.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnodeid-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getNodeIP*****

   <blockquote>Get the IP of this node.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnodeip-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getNodeVersion*****

   <blockquote>Get the version of this node.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getnodeversion-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.isBootstrapped*****

   <blockquote>Check whether a given chain is done bootstrapping.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-isbootstrapped-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getTxFee*****

   <blockquote>Get the transaction fee of the network.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-gettxfee-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.getVMs*****

   <blockquote>Get the virtual machines installed on this node.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-getvms-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.uptime*****

   <blockquote>Returns the network's observed uptime of this node.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-uptime-js">Nodejs</a></p>

   <br/>

   ⚙️ *****info.peers*****

   <blockquote>Get description of peer connections.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-info-peers-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.addDelegator*****

   <blockquote>Add a delegator to the Default Subnet. A delegator stakes DCM and specifies a validator (the delegatee) to validate on their behalf. The delegatee has an increased probability of being sampled by other validators (weight) in proportion to the stake delegated to them. The delegatee charges a fee to the delegator; the former receives a percentage of the delegator’s validation reward (if any.) The delegation period must be a subset of the perdiod that the delegatee validates the Default Subnet.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-adddelegator-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.addValidator*****

   <blockquote>Add a validator to the Default Subnet.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-addvalidator-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.addSubnetValidator*****

   <blockquote>Add a validator to a Subnet other than the Default Subnet. The validator must validate the Default Subnet for the entire duration they validate this Subnet.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-addsubnetvalidator-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.createAddress*****

   <blockquote>Add a delegator to the Default Subnet. A delegator stakes DCM and specifies a validator (the delegatee) to validate on their behalf. The delegatee has an increased probability of being sampled by other validators (weight) in proportion to the stake delegated to them. The delegatee charges a fee to the delegator; the former receives a percentage of the delegator’s validation reward (if any.) The delegation period must be a subset of the perdiod that the delegatee validates the Default Subnet.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-createaddress-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.createSubnet*****

   <blockquote>Create an unsigned transaction to create a new Subnet. The unsigned transaction must be signed with the key of the account paying the transaction fee. The Subnet’s ID is the ID of the transaction that creates it (ie the response from issueTx when issuing the signed transaction.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-createsubnet-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getBalance*****

   <blockquote>Get the balance of an asset controlled by a given address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getbalance-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getBlockchains*****

   <blockquote>Get all the blockchains that exist (excluding the ATH-Chain).</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getblockchains-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getBlockchainStatus*****

   <blockquote>Get the status of a blockchain.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getblockchainstatus-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getCurrentSupply*****

   <blockquote>Returns an upper bound on the number of DCM that exist. This is an upper bound because it does not account for burnt tokens, including transaction fees.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getcurrentsupply-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getTotalStake*****

   <blockquote>Get the total amount of nDCM staked on the Primary Network.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettotalstake-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getCurrentValidators*****

   <blockquote>List the current validators of the given Subnet.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getcurrentvalidators-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getMaxStakeAmount*****

   <blockquote>List the current validators of the given Subnet.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getmaxstakeamount-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getHeight*****

   <blockquote>Returns the height of the last accepted block.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getheight-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getMinStake*****

   <blockquote>Returns the minimum stake amount.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getminstake-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getRewardUTXOs*****

   <blockquote>Returns the UTXOs that were rewarded after the provided transaction's staking or delegation period ended.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getrewardutxos-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getStake*****

   <blockquote>Returns the staked amount for an array of addresses.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getstake-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getTxStatus*****

   <blockquote>Returns the status of a authority chain transaction.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettxstatus-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getPendingValidators*****

   <blockquote>List the validators in the pending validator set of the specified Subnet. Each validator is not currently validating the Subnet but will in the future.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getpendingvalidators-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getStakingAssetID*****

   <blockquote>Retrieve an assetID for a subnet’s staking asset. Currently this always returns the Primary Network’s staking assetID.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getstakingassetid-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getSubnets*****

   <blockquote>Get all the Subnets that exist.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getsubnets-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getTx*****

   <blockquote>Returns the specified transaction.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettx-js">Nodejs</a></p>

   <br/>


   ⚙️ *****authority.getTimestamp*****

   <blockquote>Returns the specified transaction.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-gettimestamp-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getUTXOs*****

   <blockquote>Get the UTXOs that reference a given address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getutxos-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.getValidatorsAt*****

   <blockquote>Get the validators and their weights of a subnet or the Primary Network at a given ATH-Chain height.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-getvalidatorsat-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.exportDCM*****

   <blockquote>Send DCM from an account on the ACT-Chain to an address on the AST-Chain. This transaction must be signed with the key of the account that the DCM is sent from and which pays the transaction fee. After issuing this transaction, you must call the AST-Chain’s importDCM method to complete the transfer.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-exportdcm-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.exportKey*****

   <blockquote>Get the private key that controls a given address. The returned private key can be added to a user with authority.importKey.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-exportkey-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.importDCM*****

   <blockquote>Complete a transfer of DCM from the AST-Chain to the ACT-Chain. Before this method is called, you must call the AST-Chain’s exportDCM method to initiate the transfer.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-importdcm-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.importKey*****

   <blockquote>Give a user control over an address by providing the private key that controls the address.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-importkey-js">Nodejs</a></p>

   <br/>


   ⚙️ *****authority.listAddresses*****

   <blockquote>List the addresses controlled by the given user.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-listaddresses-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.sampleValidators*****

   <blockquote>Sample validators from the specified Subnet.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-samplevalidators-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.validatedBy*****

   <blockquote>Get the Subnet that validates a given blockchain.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-validatedby-js">Nodejs</a></p>

   <br/>

   ⚙️ *****authority.validates*****

   <blockquote>Get the IDs of the blockchains a Subnet validates.</p>
   </blockquote>
   <p>Example: <a href="https://gist.github.com/gowrishZeeve/28c8bc3431d9d8d53efdcaca10f98f46#file-authority-validates-js">Nodejs</a></p>

   <br/>

---

#### WebSocket
   - ACT-Chain URL - `wss://node_url/ext/bc/ACT/ws`.

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
   
<br/>

###### Available WebSocket Methods

   <br/>

   ⚙️ *****eth_baseFee*****
  
   <blockquote>
   <p>Get the base fee for the next block.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_blockNumber*****
  
   <blockquote>
   <p>Getting the most recent block number.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_call*****
  
   <blockquote>
   <p>Call a contract.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_chainId*****
  
   <blockquote>
   <p>Not well documented in JSON-RPC references. See instead EIP694.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_getAssetBalance*****
  
   <blockquote>
   <p>Getting an account’s non-DCM balance.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_getBalance*****
  
   <blockquote>
   <p>Getting an account’s balance.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_maxPriorityFeePerGas*****
  
   <blockquote>
   <p>Getting an account’s balance.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_getTransactionCount*****
  
   <blockquote>
   <p>Getting an account’s nonce.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_sendRawTransaction*****
  
   <blockquote>
   <p>Send a raw transaction.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_getBlockByHash*****
  
   <blockquote>
   <p>Getting a block by hash.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_getBlockByNumber*****
  
   <blockquote>
   <p>Getting a block by number.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_getTransactionByHash*****
  
   <blockquote>
   <p>Getting a transaction by hash.</p>
   </blockquote>

   <br/>

   ⚙️ *****eth_getTransactionReceipt*****
  
   <blockquote>
   <p>Getting a transaction receipt.</p>
   </blockquote>

   <br/>

   ⚙️ *****dcm.export*****
  
   <blockquote>
   <p>Getting a transaction receipt.</p>
   </blockquote>

   <br/>

   ⚙️ *****dcm.exportKey*****
  
   <blockquote>
   <p>Get the private key that controls a given address.The returned private key can be added to a user with dvm.importKey.</p>
   </blockquote>

   <br/>

   ⚙️ *****dcm.getAtomicTx*****
  
   <blockquote>
   <p>Returns the specified transaction.</p>
   </blockquote>

   <br/>

   ⚙️ *****dcm.getAtomicTxStatus*****
  
   <blockquote>
   <p>Get the status of a transaction sent to the network.</p>
   </blockquote>

   <br/>

   ⚙️ *****dcm.getUTXOs*****
  
   <blockquote>
   <p>Get the UTXOs that reference a given address.</p>
   </blockquote>

   <br/>

   ⚙️ *****dcm.import*****
  
   <blockquote>Send DCM from the AST-Chain to an account on the ATH-Chain. After calling this method, you must call the ATH-Chain’s DCM method to complete the transfer. the UTXOs that reference a given address.</p>
   </blockquote>

   <br/>

   ⚙️ *****dcm.importKey*****
  
   <blockquote>Give a user control over an address by providing the private key that controls the address.</p>
   </blockquote>

   <br/>

   ⚙️ *****net_version*****
  
   <blockquote>Getting the network ID.</p>
   </blockquote>

   <br/>

   ⚙️ *****web3_clientVersion*****
  
   <blockquote>Getting the current client version.</p>
   </blockquote>

   <br/>

   ⚙️ *****web3_sha3*****
  
   <blockquote>Calculate a cryptographic hash.</p>
   </blockquote>

   <br/>

---
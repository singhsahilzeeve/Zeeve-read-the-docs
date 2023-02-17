# Corda 


1. **Create CLI Access**

    - Navigate to settings and then click on “API Credentials” to see a list of CLI/API credentials.
    - Click “Create key”.
    - Provide a name, and select one or more networks to associate with the key.
    - Add appropriate permissions for the operations that the keys are being created for.
    - Click “Create key” and then copy/save generated keys.

2. **Login with Zeeve CLI**
    - Login with Zeeve CLI using the earlier created keys and add these urls as well - <br></br>
        ```
        zeeve login -i < access-key > -s < secret-key > -ae https://app.zeeve.io/auth/cli/login -ce  https://app.zeeve.io/fabric-backend/chaincode/ 
        ```
3. **Deploy**
   - Use the following command to deploy **Corda**
        ```
        zeeve corda corda-deploy -f < cordapp tar file> -n < networkID >
        ```


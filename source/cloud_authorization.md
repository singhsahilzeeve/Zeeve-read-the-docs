---
description:Explore the best practices and technical details for managing authorization in Zeeve's cloud-based platform. Learn how to secure your data and control access to resources with our API and tools.
---
# Cloud Authorizations

Zeeve allows you to authorize multiple cloud accounts of yours so as to create networks in the cloud of your choice. You may choose to deploy some nodes of network on one cloud and extend some nodes of the same on another. This cross cloud deployment maybe a major requirement for your usecase or clients especially for creating/expanding consortiums.

Zeeve supports a list of cloud for you to choose from. You can authorize multiple clouds and choose between them at the time of creating networks or nodes. Following is the list of currently supported clouds:-

1. AWS
2. Digital Ocean 


---
***INTERESTING FACT:** Zeeve doesn't use **blockchain services** of any of the supported cloud platforms, and hence is not restricted for the level of features it can provide for a protocol on any cloud.*

---


## AWS Authorization

Before you authorize your AWS account with Zeeve, you'll need following permissions to deploy a network:
> * Permission to create VPC, Elastic Ips, EC2 instance, Security group, Internet gateway and Route tables.
> * For Fabric, you need additional permissions to read/write EKS, CloudFormation and to create and pass any Role in IAM.

To authorize your AWS account on Zeeve:-

1. Hover on **profile** 

    ![img](./images/profile.png)

2. Click on **Edit Profile**
 
    ![img](./images/profilemenu.png)

3. Click on **My Cloud**.

    ![img](./images/editprofile.png)

4. Click on **AWS** and then click on 
    **Add AWS Cloud**.
   
    ![img](./images/addAWS.png)

5. You will need AWS Access Key and AWS Access Secret Key, to authenticate your AWS account with Zeeve.

    ![img](./images/awslogin.png)

## Digital Ocean Authorization

To authorize your Digital Ocean account on Zeeve you'll need to ensure certain things:-
 
> * User must have an account with enough permissions to create - 
> * Project
> * Droplets
> * and Kubernetes service.

After which on Zeeve do following steps:- 

1. Hover on **profile** 
 
    ![img](./images/profile.png)

2. Click on **Edit Profile**
 
    ![img](./images/profilemenu.png)

3. Click on your cloud authentication for Digital Ocean account, click on **Authorize digital Ocean**.

    ![img](./images/editprofile.png)

4. Click on **DigitalOcean** and then click on 
    **Add Digital Ocean Cloud**.
   
    ![img](./images/addDO.png)

5. Authorize DigitalOcean will redirect you to login page, you can login with your DigitalOcean credentials, once login is successful, Zeeve will be connected to your account.

    ![img](./images/DOlogin.png)

6. After this, you will be asked to allow Zeeve in your cloud account. Make sure you provide both **read and write** access on this page.

## Tencent Cloud Authorization

Before you authorize Tencent Cloud on Zeeve, you will need to add Zeeve's IDP into your Cloud account.

### Creating an OIDC IdP

1. On the left sidebar in the CAM console, select **Identity Providers** > **Role-Based SSO**.

    ![img](./images/createIDP.png)

2. On the **Role-Based SSO** page, click **Create IdP**.

3. On the page you enter, select **OIDC** as the IdP type and enter the following IdP information. <br>
**IdP Name**: ```zeeve_oauth``` <br>
**IdP URL**: ```https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0``` <br>
**Client ID**: ```505b1146-13fe-4df6-927a-ca57321786fd``` <br>
**Public Key for Signature**: For this you can click on this link [(https://login.microsoftonline.com/common/discovery/v2.0/keys)](https://login.microsoftonline.com/common/discovery/v2.0/keys) then copy all the content and paste it in the column.

4. Click **Next** to enter the information review page.

    ![img](./images/addIDPInfo.png)

5. Confirm the information you entered and click **Complete** to save it.

### Creating a role for the IdP

1. On the left sidebar in the CAM console, click **Roles**.

    ![img](./images/createRole.png)

2. On the role management page, click **Create Role**.

3. Select **IdPs** as the role entity.

4. On the page you enter, select **OIDC** as the IdP type.

5. Select an IdP you created i.e **zeeve_oauth**.

6. Set conditions for the role: <br>
**oidc:aud**: ```505b1146-13fe-4df6-927a-ca57321786fd``` <br>
**oidc:sub**: Delete this.

    ![img](./images/addRoleInfo.png)

7. Click Next.

8. On the page you enter, associate the **QCloudResourceFullAccess** and the **QCloudFinanceFullAccess** policy with the role and click **Next**.

    ![img](./images/configureRolePolicy.png)

9. On the review page, enter the role name and role description (optional) and click **Complete** to save the above configurations.

### Authorizing Cloud account

1. Hover on **profile** 
 
    ![img](./images/profile.png)

2. Click on **Edit Profile**
 
    ![img](./images/profilemenu.png)

3. Click on **My Cloud**.

4. Click on **Tencent** and then click on **Add Tencent Cloud**.

    ![img](./images/addTencentCloud.png)

5. Add the **ProviderId** and **RoleARN** that you have created in the previous steps.

    ![img](./images/tencentCreds.png)

6. Login through any of your microsoft personal account, work account or you can add an account.

    ![img](./images/tencentOAuth.png)

7. This will lead you to a consent screen where you will need to **Accept** the Terms & Conditions to allow Zeeve to use your credentials.

    ![img](./images/consentScreen.png)
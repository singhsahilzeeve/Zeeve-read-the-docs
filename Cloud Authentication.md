# Cloud Authentication

## Prerequisites

   **[Zeeve](https://www.zeeve.io/)** Account

### Zeeve support multiple clouds:-

1.  AWS(Amazon Web Service) 
2.  Microsoft Azure 

### To authenticate the cloud account:

> 1. Hover on **profile** 
> 
> ![](profile.png)
> 
>   2. Click on **Edit Profile**
> 
> ![](profile%20menu.png)
>   3. Click on your cloud authentication(e.g. for AWS account, click on **AWS Authentication**, for Azure account, click on **Azure
> Authentication** )
> 
> ![](edit%20profile.png)

## AWS Authentication

> You need to generate AWS Access Key and AWS Access Secret Key, after that you can authenticate your AWS account with Zeeve.

![](aws%20login.png)

## Azure Authentication

> ### Pre-condition
> 
>   1. User must have an account with global admin role
>   2. Source should be an azure active directory
>   3. Login from this account in Azure portal(if hasn't been logged before)
>   4. User must have enough permissions to write subscription Id
> 
> Azure authentication will redirect you to Microsoft Azure login page, you can login with Microsoft credentials, once login successful, Zeeve will be connected to your Azure account.

![](azure%20login.png)
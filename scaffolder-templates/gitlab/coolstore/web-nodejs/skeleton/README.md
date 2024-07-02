# web-nodejs
CoolStore Frontend with NodeJS and AngularJS.


The overall architecture of the application that you will deploy is the following:


<br>
<img src="coolstore-arch.png" width="400" alt="Coolstore Architecture">

* **Catalog Service** exposes using a REST API content of a catalog stored in a relational database
* **Inventory Service** exposes using a REST API the inventory stored in a relational database
* **Gateway Service** calls the **Catalog Service** and **Inventory Service** in an efficient way
* **WebUI Service** calls **Gateway Service** to retrieve all the informations.

Use this environment variable to connect to the Gateway Service (default is http://localhost:8090):
```
COOLSTORE_GW_ENDPOINT
```
Example:
```
COOLSTORE_GW_ENDPOINT=http://gateway-vertx.somewhere.tld
```

If you are using **HTTPS** please consider CORS and use HTTPS everywhere, use this environment variable:

```
SECURE_COOLSTORE_GW_ENDPOINT
```

Example:
```
SECURE_COOLSTORE_GW_ENDPOINT=https://gateway-vertx.somewhere.tld
```

The UI fetches products every 5 seconds by default. This can be changed by setting the `PRODUCT_REFRESH_INTERVAL` to a value represented in milliseconds, e.g `PRODUCT_REFRESH_INTERVAL=3000` for a 3 second refresh interval.

The outcome is an online store with a catalog of product items and an inventory of stock:

<img src="coolstore-web.png" width="600" alt="Coolstore Shop">


## Developer Workspace

[![Contribute](https://raw.githubusercontent.com/blues-man/cloud-native-workshop/demo/factory-contribute.svg)](https://codeready-openshift-workspaces.apps.crc.testing/factory?url=https://github.com/modernizing-java-applications-book/web-nodejs&policies.create=peruser)



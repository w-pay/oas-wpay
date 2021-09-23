# OAS-WOW-PAY-WALLET

This repository contains the OpenAPI schemas for the Wallet API.

`/src`: Contains the evergreen schemas
`/dist`: Contains the production versions of schemas

The repository also contains an `index.js` to export the schemas for typescript projects in the following format:

```
{
    1.0.0: {$schema},
    1.0.1: {$schema},
    latest: {$schema}
}
```

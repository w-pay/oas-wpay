# Notes for Wayne and Francois (9th February 2021)

wpay.json has been updated to include some more end points that are ready for
mapping.

General notes:

* Any of the paths that do not start with +/ are ready for mapping at Apigee to
the existing targets.
* I have created wpay.old.json to hold the end points that aren't yet valid so
that the wpay.json file is now valid OAS.
* Content-Type is removed as a header because it is redundant in OAS

For end points to be mapped to existing wallet nodeJs targets:

* These end points are tagged with XXXXTO_WALLET
* I have updated to use the standard digipay headers but the targets will need
    to receive x-wallet-id which isn't publicly expsed (I assume Apigee already
    does this)

For end points to be mapped to existing DigiPay targets:

* These end points are tagged with XXXXTO_DIGIPAY
* The requests and responses are wrapped with data{} and meta{} is added
* I have added a mandatory x-v header that needs to be checked for
* I have made x-message-id mandatory

# TODO notes by James

* Componentise all request bodies and responses
* Fill in all of the error responses on the wallet end points
* Fix the descriptions of requests and responses
* Fix request and response examples
* Incoporate recent changes to wallet.json by Wayne and James (Ts&Cs,
    preferences, split payments)
* Finish the combined end points
* Decompose swagger

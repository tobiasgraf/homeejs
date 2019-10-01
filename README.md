# homeejs
This mocks the homee api in a way that it can be used with the "homee in homee" feature. This makes it possible to add all kinds of devices to homee.

# WIP

See app.mjs for basic example how to use this

You need to use `--experimental-modules` and node v10.xx to run this. (I used 10.16.3).

# Usage

To connect to homeejs using the homee app, just use the ip or the `name` (dafault is `homeejs`) you used when creating the api `new HomeeAPI('homeejs');` see [app.mjs](https://github.com/tobiasgraf/homeejs/blob/master/app.mjs#L23)

There is no user management atm, just use username "homee" and any password.


# Disclaimer
This is a purely private project and has no connection with Codeatelier GmbH.

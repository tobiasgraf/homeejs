# homeejs
This mocks the homee api in a way that it can be used with the "homee in homee" feature. This makes it possible to add all kinds of devices to homee.

# WIP

See app.mjs for basic example how to use this

You need to use `--experimental-modules` and node v10.xx to run this. (I used 10.16.3).

# Usage

To connect to homeejs using the homee app, just use the ip or the `name` (dafault is `HOMEEJS`) you used when creating the api `new HomeeAPI('HOMEEJS');` see [app.mjs](https://github.com/tobiasgraf/homeejs/blob/master/app.mjs#L23).
Use a all UPPERCASE NAME, homee has some trouble when with lower case names when searching for new devices.

There is no user management atm, just use username "homee" and any password.

# Node-Red

A Node-Red Plugin has been developed out of this and can be found [here](https://github.com/stfnhmplr/node-red-contrib-homee). 
There is also a (german) [Blogpost](https://himpler.com/blog/virtuelle-geraete-in-homee-mit-node-red) about the Node-Red plugin and a [homee community thread](https://community.hom.ee/t/mal-wieder-virtuelle-geraete-jetzt-aber-richtig/24831)

# Disclaimer
This is a purely private project and has no connection with Codeatelier GmbH.

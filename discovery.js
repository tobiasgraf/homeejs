module.exports = {
  start: start,
};

/**
 * starts the discovery server and listens for given alias
 * @param {stirng} alias
 */
function start(alias) {
  // Require dgram module.
  const dgram = require('dgram');

  // Create udp server socket object.
  const server = dgram.createSocket('udp4');

  // Make udp server listen on port 15263.
  server.bind(15263);

  /**
 * compares two string, case insensitive
 * @param {*} a
 * @param {*} b
 * @return {bool} true if equal, false otherwise
 */
  function iequals(a, b) {
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, {sensitivity: 'accent'}) === 0
        : a === b;
  }

  // When udp server receive message.
  server.on('message', function(message, rinfo) {
  // Create output message.
    const output = 'Discovery server receive message : ' + message + '\n';
    // Print received message in stdout, here is log console.
    if ( iequals(message.toString(), alias.toString())) {
    // initialized:00055107F7B1:00055107F7B1:homee
    // eslint-disable-next-line new-cap
      message = new Buffer.from('initialized:' + alias + ':' + alias +':homee');

      // Send message to udp server through client socket.
      server.send(message, 0, message.length, rinfo.port, rinfo.address);
    } else {
      console.log('message did not match alias: ' + message + '__vs__' + alias);
    }
    process.stdout.write(output);
  });

  // When udp server started and listening.
  server.on('listening', function() {
  // Get and print udp server listening ip address
  // and port number in log console.
    const address = server.address();
    console.log('UDP Server started and listening on ' + address.address + ':' + address.port);
  });
}

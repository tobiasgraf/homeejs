import HomeeAPI from './homeeAPI.mjs';
import Node from './node.mjs';
import Attribute from './attribute.mjs';

const nodes = [
  new Node('Light LivingRoom', 10, 15, [ // nodeID = 10, Profile = 15 = Dimmer
    new Attribute(10, 10, 0, 0, 1, 0, 0, 0, '', 1, 1, 1, ''), // on off
    new Attribute(11, 10, 0, 0, 100, 0, 0, 0, '%25', 1, 1, 2, ''), // dimming level
  ]),
  new Node('Shutter LivingRoom', 20, 2004, [ // nodeID = 20, Profile = 2004 = Roller shutter
    new Attribute(20, 20, 0, 0, 4, 0, 0, 0, '', 1, 1, 135, ''), // updown
    new Attribute(21, 20, 0, 0, 100, 0, 0, 0, '%25', 1, 1, 15, ''), // position
  ]),
  new Node('balcony door LivingRoom', 30, 2000, [ // nodeID = 30, Profile = 2000 = Door/Window Sensor
    new Attribute(30, 30, 0, 0, 1, 0, 0, 0, '', 1, 0, 14, ''), // open close
  ]),
  new Node('temperature LivingRoom', 40, 3009, [ // nodeID = 40, Profile = 3009 = Temperature Sensor
    new Attribute(40, 40, 0, 0, 40, 0, 0, 0, '%C2%B0C', 0.1, 0, 5, ''), // temperature sensor
  ]),
  new Node('Philips Hue Bewegungsmelder', 50, 4035, [ // nodeID = 50, Profile = 4035 = CANodeProfilePresenceDetectorWithTemperatureAndBrightnessSensor
    new Attribute(50, 50, 0, 0, 40, 0, 0, 0, '%C2%B0C', 1, 0, 5, ''), // temperature sensor
    new Attribute(51, 50, 0, 0, 1, 0, 0, 0, '', 1, 0, 76, ''), // presence alarm
    new Attribute(52, 50, 0, 0, 50000, 0, 0, 0, 'lx', 1, 0, 76, ''), // brightness alarm
  ]),
  new Node('Danfoss Z Thermostat', 60, 3006, [ // nodeID = 60, Profile = 3006 = RadiatorThermostat
    new Attribute(60, 60, 0, 0, 40, 0, 0, 0, '%C2%B0C', 1, 1, 6, ''), // target temperature
  ]),

];

const api = new HomeeAPI('HOMEEJS');
api.setNodes(nodes);

// Get Nodes is handled by the api itself, but if you want to do something else here ...
// api.on('GET:nodes', (wantedNodes) => {
//   if ( wantedNodes.length == 0 ) {
//     console.log('user wants all nodes');
//   } else {
//     for (const wantedNode of wantedNodes) {
//       console.log('user wants node ' + wantedNode);
//     }
//   }
// });
// api.on('GET:all', () => {
//   console.log('user wants Get all ');
// });

api.on('PUT:attributes', (attributeID, nodeID, targetValue, parsed) => {
  console.log('user wants to switch attribute %i of Node %i to %f ', attributeID, nodeID, targetValue);
});

// api.on('get', (parsed) => {
//   console.log('GET Event: %o', parsed);
// });
// api.on('post', (parsed) => {
//   console.log('POST Event: %o', parsed);
// });
// api.on('put', (parsed) => {
//   console.log('PUT Event: %o', parsed);
// });

api.start();

function findAttribute(attributeID) {
  let found;
  nodes.find((node) => node.attributes.find((attr) => attr.id === attributeID && (found = attr)));
  return found;
}

function valueChanged(oldValue, newValue) {
  const Attr = findAttribute(10);
  console.log('changed from %o to %o', oldValue, newValue);
  Attr.setCurrentValue(newValue);
  Attr.setTargetValue(newValue);
  api.send(JSON.stringify({'attribute': Attr}));
}

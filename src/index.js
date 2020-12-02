const ParticlePlatform = require('./Platform.js');

module.exports = (homebridge) => {
  global.homebridge = homebridge;
  homebridge.registerPlatform('homebridge-particle-tnilsen-io', 'ParticleIO', ParticlePlatform);
};

const ActorAccessory = require('./StatelessProgrammableSwitchAccessory.js');

class StatelessProgrammableSwitchAccessory extends ActorAccessory {

  constructor(log, url, accessToken, device, homebridge) {
    const Service = homebridge.hap.Service;
    const Characteristic = homebridge.hap.Characteristic;
    super(log, url, accessToken, device, homebridge, Service.StatelessProgrammableSwitch, Characteristic.ProgrammableSwitchEvent);
  }

  getState(callback) {
    // set this to a valid value for ProgrammableSwitchEvent
    const currentValue = 1;

    callback(null, currentValue);
  }
}

module.exports = StatelessProgrammableSwitchAccessory;


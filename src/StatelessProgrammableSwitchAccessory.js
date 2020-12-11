const ActorAccessory = require('./StatelessProgrammableSwitchAccessory.js');

class StatelessProgrammableSwitchAccessory extends ActorAccessory {

  constructor(log, url, accessToken, device, homebridge) {
    const Service = homebridge.hap.Service;
    const Characteristic = homebridge.hap.Characteristic;
    super(log, url, accessToken, device, homebridge, Service.StatelessProgrammableSwitch, Characteristic.ProgrammableSwitchEvent);
  }

  setState(value, callback) {
    super.setState(value ? '1' : '0', callback);
  }
}

module.exports = SwitchAccessory;


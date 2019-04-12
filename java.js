let SwitchButton = function () {
    this.connectToLamp = function (connect) {
        this.connect = connect;
    };
    this.switchOff = function () {
        alert("Off");
    };
    this.switchOn = function () {
        alert("On");
    }
};

let ElectricLamp = function () {
    this.turnOn = function () {
        alert("Lighting");
    };
    this.turnOff = function () {
        alert("Not Lighting");
    }
};

let switchButton = new SwitchButton();
let electricLamp = new ElectricLamp();
for (let i = 0; i < 10; i ++) {
    switchButton.connectToLamp();
    switchButton.switchOff();
    electricLamp.turnOff();
    switchButton.switchOn();
    electricLamp.turnOn();
}

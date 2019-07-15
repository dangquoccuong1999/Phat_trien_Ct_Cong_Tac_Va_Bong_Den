let ElectricLamp = function () {
    this.status = false;
    let img = document.getElementById('anh');
    this.off = function () {
        img.src='2.jpg';
        alert('Đèn đã tắt');
        this.status = false
    }
    this.on = function () {
        img.src='1.jpg';
        alert('Đèn đã được bật !!!');
        this.status= true
    }
}
let SwitchButton = function () {
    this.status = true;
    this.connectToLamp = function (electricLamp) {
        this.lamp = electricLamp;
    }
    this.switchOn = function () {
        if (this.status) {
            this.lamp.on();
            this.status = false;
        }
    }
    this.switchOff = function () {
        if (!this.status) {
            this.lamp.off();
            this.status = true;
        }
    }
}

let lamp = new ElectricLamp();
let switchButton = new SwitchButton();
switchButton.connectToLamp(lamp);

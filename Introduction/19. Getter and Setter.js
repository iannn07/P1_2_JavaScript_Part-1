class Thermostat {
    constructor (temp){
        this._temp = (temp * 9/5) + 32;
    }
    get temperature (){
        return this._temp;
    }
    set temperature(UpdatedTemp){
        this._temp = UpdatedTemp;
    }
}

// Will use class
let thermostat = new Thermostat(25);

// Will use getter
console.log(thermostat.temperature);

// Will use setter
thermostat.temperature = 26;

// Will use getter
console.log(thermostat.temperature);
const SpaceStation = require("./SpaceStation.js");
class Cargo {

    constructor (options) {
        this.id=options.id;
        this.SpaceStation = options.SpaceStation;
        this.name = options.name;
        this.weight = options.weight;
        this.is_delivered = options.is_delivered;
    }
}

module.exports = Cargo;
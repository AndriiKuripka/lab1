const Planet = require("./Planet.js");
class SpaceStation {

    constructor (options) {
        this.id = options.id;
        this.name = options.name;
        this.Planet = options.Planet;
    }

}


module.exports = SpaceStation;
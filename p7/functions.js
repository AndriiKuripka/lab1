const Cargo = require("./Cargo.js");
const DeliveredCargo = require("./DeliveredCargo.js");
const Planet = require("./Planet.js");
const SpaceStation = require("./SpaceStation.js");

function createListOfPlanets (i) {

    let planets = [new Planet({id:0, name:"Planet number 0",})];
    for (let j = 1; j < i; j++){
        planets.push(new Planet({id:j, name:"Planet number " + j.toString()}))
    }
    return planets;
}
let planets = createListOfPlanets(20);


function createListOfStations (i) {

    let stations = [new SpaceStation({id:0, name:"Station number 0", Planet: planets[0]})];
    for (let j = 1; j < i; j++){
        stations.push(new SpaceStation({id:j, name:"Station number " + j.toString(), Planet: planets[j]}))
    }
    return stations;
}
let stations = createListOfStations(20);
/*console.log(stations)*/

function createListOfCargoes (i) {

    let cargoes = [new Cargo({id:0,SpaceStation:stations[0], name:"Cargo number 0",weight:100,is_delivered:false})];
    for (let j = 1; j < i; j++){
        cargoes.push(new Cargo({id:j,SpaceStation:stations[j], name:"Cargo number " + j.toString(),weight:Math.floor((Math.random() * 200))+100,is_delivered:true}))
    }
    return cargoes;
}
let cargoes = createListOfCargoes(20);
//console.log(cargoes)

function addNewStation (name, StationList,Planet) {
    StationList.push(new SpaceStation({id:StationList.length, name:name, Planet:Planet}));
}

addNewStation("StationEarth", stations,planets[5]);
/*console.log(stations);*/

function refactorStation (id, newName, StationList) {
    StationList.map(SpaceStation => {
        if (SpaceStation.id === id) {
            SpaceStation.name = newName;
        }
    });
}
refactorStation(4, "bbb", stations);
// console.log(stations)

function deleteStation (id, StationList) {
    return StationList.filter(SpaceStation => SpaceStation.id !== id);

}
stations = deleteStation(6, stations)
/*
console.log(stations)
*/

function findStationById(id, StationList,Planet){
    return StationList.filter(station => station.id === id)
}


/*
console.log(findStationById(3, stations));
*/

function addNewPlanet (name, PlanetList) {
    PlanetList.push(new Planet({id:PlanetList.length, name:name}));
}

addNewPlanet("Earth", planets);
/*console.log(planets);*/


function refactorPlanet (id, newName, PlanetList) {
    PlanetList.map(Planet => {
        if (Planet.id === id) {
            Planet.name = newName;
        }
    });
}
refactorPlanet(4, "bbb", planets);
 //console.log(planets)

function deletePlanet (id, PlanetList) {
    return PlanetList.filter(Planet => Planet.id !== id);

}
planets = deletePlanet(6, planets)
/*console.log(planets)*/

function findPlanetById(id, PlanetList){
    return PlanetList.filter(plan => plan.id === id)
}


/*console.log(findPlanetById(3, planets));*/


function addNewCargo (CargoList,SpaceStation, name,weight,is_delivered) {
    CargoList.push(new Cargo({id:CargoList.length,SpaceStation:SpaceStation, name:name,weight:weight,is_delivered:is_delivered}));
}

addNewCargo(cargoes,stations[2],"EarthCargo",120, false);
//console.log(cargoes);


function refactorCargo (id, newName, CargoList) {
    CargoList.map(Cargo => {
        if (Cargo.id === id) {
            Cargo.name = newName;
        }
    });
}

refactorPlanet(4, "bbb", cargoes);
//console.log(cargoes)

function deleteCargo (id, CargoList) {
    return CargoList.filter(Cargo => Cargo.id !== id);

}
cargoes = deleteCargo(6, cargoes)
//console.log(cargoes)

function findStation(StationList,planet){
    return StationList.filter(station => station.Planet === planet)
}


/*console.log(findStation(stations, planets[3]));*/


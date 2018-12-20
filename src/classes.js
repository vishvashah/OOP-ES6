import {car} from './classes/car.js';
import {drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {Fleetdataservice} from './services/fleet-data-service.js'; 
//console.log(fleet);
let dataService = new Fleetdataservice();
dataService.loadData(fleet);

//let cars =dataService.getCarSortedByLicense();

let cars = dataService.filterCarsByMakes('e');
for(let car of cars)
console.log(car.make);
//let car1= dataService.getCarByLicense('AT9900');
//console.log(car1);
//for (let e of dataservice.errors)
//console.log(e.message);

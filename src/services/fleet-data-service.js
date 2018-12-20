import {car} from '../classes/car.js';
import {drone} from '../classes/drone.js';

export class Fleetdataservice{
    constructor(){
        this.cars=[];
        this.drones=[];
        this.errors=[];

    }
    getCarByLicense(license){
        return this.cars.find(function(car){
            return car.license===license;
        });
    }

    getCarSortedByLicense(){
        return this.cars.sort(function(car1, car2){
            if(car1.license < car2.license)
                 return -1;
            if(car1.license > car2.license)  
                return 1;
            return 0;

        });
    }

    filterCarsByMakes(filter){
        return this.cars.filter(car=> car.make.indexOf(filter)>=0);
    }
    loadData(fleet){
        for(let data of fleet){
            switch(data.type){
                case 'car':
                this.cars.push(data);
                break;
                case 'drone':
                this.drones.push(data);
                break;
                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }
    loadcar(car){
        try{
        let c = new car(car.license, car.model, car.latLong);
        c.miles = car.miles;
        c.make = car.make;
        return c;
    }
    catch(e){
        this.errors.push(new DataError('error loading car', car))
    }
    return null;
}
}
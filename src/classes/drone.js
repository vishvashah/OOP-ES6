import {vehicle} from './vehicle.js';

export class drone extends vehicle{
    constructor(license,model,latLong){
        super(license,model,latLong);
        this.airTimeHours=null;
        this.base=null;
    }

}
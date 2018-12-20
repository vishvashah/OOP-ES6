import {vehicle} from './vehicle.js';

export class car extends vehicle{
    //console.log('hii'); 
    constructor(license,model,latLong){
        super(license,model,latLong);
        this.miles=null;
        this.make=null;
    }

}
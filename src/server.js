//var $ = require('jquery');
import $ from 'jquery';
// import {car} from './classes/car.js';
// import {drone} from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { Fleetdataservice } from './services/fleet-data-service.js';
import { ApplicationBase } from './framework/application-base.js';
import {HomePage} from './home.js';
import {CarsPage} from './cars-page.js';
import {DronesPage} from './drones-page.js';
import {MapPage} from './map-page.js';

export class App extends ApplicationBase {
  constructor() {
    super('Fleet Manager'); 
    this.dataService = new Fleetdataservice();
    this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', new DronesPage());
    this.addRoute('Map', new MapPage());
  }
}

export let application = new App();
application.show($('body'));

// import {TitleBar} from './ui/title-bar.js';
// import {Button} from './ui/button.js';
// import {Image} from './ui/image.js';
// import {DataTable} from './ui/data-table.js';
// import {GoogleMap} from './ui/google-map.js';

// let t = new TitleBar('Application');
// t.addLink('Home','');
// t.addLink('Cars','');
// t.addLink('Drone','');
// t.addLink('Bikes','');
// t.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

//  let i = new Image('../images/pic.jpg');
//  i.appendToElement($('body'));

//  let headers = "License Make Model Miles".split(' ');
//  let dataService = new Fleetdataservice();
// dataService.loadData(fleet);
//  let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));

// let centerOfMap = {lat: 40.783661, lng: -73.965883};
// let map = new GoogleMap(centerOfMap, dataService.cars);

// map.appendToElement($('body'));

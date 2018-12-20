import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import { application} from './server.js';

export class DronesPage extends Page {

    constructor() {
        super('Drones');
     
}

createElement() {
    super.createElement();
    
    let headers = 'License Model airTimeHours base'.split(' ');
    let t = new DataTable(headers,   application.dataService.drones);
    t.appendToElement(this.element);
}
getElementString() {
    return '<div style="margin: 20px;"><h3>Cars</h3></div>';
}
}
import {Page} from './framework/page.js';
//import {BaseElement} from './ui/base-element.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import { application } from './server.js';

export class HomePage extends Page{

    constructor(){
        super('Home');
    }
    createElement(){
        super.createElement();

        let i = new Image('../images/drone.jpg');
        
        i.appendToElement(this.element);

        let styleString = "width: 200px; height: 80px; font-size: 20px";
        let b = new Button('Self Driving Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(()=>application.activateRoute('Cars'));

        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(()=>application.activateRoute('Drones'));

    }

    getElementString(){
        return '<div style= "text-align:center;"></div>';
    }
}
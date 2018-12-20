import {BaseElement} from './base-element.js';

export class Image extends BaseElement{
    constructor(filename){
        super();
        this.filename=filename;
    }
    getElementString(){
        return `
        <img src="${this.filename}" style="width:20%;margin-top:20px;">
        `;
    }
}
import { LightningElement, api, track, wire } from 'lwc';

export default class Parent extends LightningElement {

    @track searchKey;

    changeKey(event) {
        this.searchKey = event.target.value;
        // console.log('parent key' + this.searchKey);
        this.template.querySelector('c-child').setKeyValue(this.searchKey);
        this.template.querySelector('c-child').searchKeyValue();

    }
}
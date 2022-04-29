import { LightningElement, api, wire, track } from 'lwc';
import searchName from '@salesforce/apex/accountController.searchName';

export default class Child extends LightningElement {

    @api searchkey;
    @track searchTest = '';
    @track accList;

    @track columns = [

        {
            label: 'Name', fieldName: 'AccountURL', type: 'url',
            typeAttributes: {
                label: {
                    fieldName: 'Name'
                },
                target: '_blank',
                sortable: true
            }
        },
        {
            label: 'Type',
            fieldName: 'Type',
            type: 'text',
            sortable: true
        },
        {
            label: 'Annual Revenue',
            fieldName: 'AnnualRevenue',
            type: 'Currency',
            sortable: true
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'phone',
            sortable: true
        },
        {
            label: 'Website',
            fieldName: 'Website',
            type: 'url',
            sortable: true
        },
        {
            label: 'Rating',
            fieldName: 'Rating',
            type: 'test',
            sortable: true
        }
    ];

    @wire(searchName)
    wiredAccounts() {
        searchName({ searchKey: this.searchTest }).then(response => {
            this.accList = response;
            console.log(this.accList);
            let items = [];
            if (this.accList.length > 0) {
                this.accList.forEach(item => {
                    let itemToPush = {
                        AccountURL: '',
                        Name: '',
                        Type: '',
                        AnnualRevenue: '',
                        Phone: '',
                        Website: '',
                        Rating: ''
                    };

                    itemToPush.AccountURL = '/lightning/r/Account' + `/${item['Id']}/view`
                    itemToPush.Name = item['Name'];
                    itemToPush.Type = item['Type'];
                    itemToPush.AnnualRevenue = item['AnnualRevenue'];
                    itemToPush.Phone = item['Phone'];
                    itemToPush.Website = item['Website'];
                    itemToPush.Rating = item['Rating'];

                    items.push(itemToPush);
                })
                this.accList = items;
     
            }
        }).catch(error => {
            console.log('Error: ' + error);
        });
    }

    @api searchKeyValue() {

        searchName({ searchKey: this.searchTest }).then(response => {
            this.accList = response;

            // console.log('child key ' + this.accList);

            let items = [];
            if (this.accList.length > 0) {
                this.accList.forEach(item => {
                    let itemToPush = {
                        AccountURL: '',
                        Name: '',
                        Type: '',
                        AnnualRevenue: '',
                        Phone: '',
                        Website: '',
                        Rating: ''
                    };

                    itemToPush.AccountURL = '/lightning/r/Account' + `/${item['Id']}/view`
                    itemToPush.Name = item['Name'];
                    itemToPush.Type = item['Type'];
                    itemToPush.AnnualRevenue = item['AnnualRevenue'];
                    itemToPush.Phone = item['Phone'];
                    itemToPush.Website = item['Website'];
                    itemToPush.Rating = item['Rating'];

                    // console.log(itemToPush.AnnualRevenue);

                    items.push(itemToPush);
                })
                this.accList = items;
            }
            console.log(this.accList);
        }).catch(error => {
            console.log('Error: ' + error);
        });
    }

    @api setKeyValue(keyValue) {
        this.searchTest = keyValue;
        console.log("set keyvalue " + this.searchTest);
    }

    // @api searchKeyEmpty() {

    //     getAccountList().then(response => {
    //         this.accList = response;
    //         let items = [];
    //         if (this.accList.length > 0) {
    //             this.accList.forEach(item => {
    //                 let itemToPush = {
    //                     AccountURL: '',
    //                     Name: '',
    //                     Type: '',
    //                     AnnualRevenue: '',
    //                     Phone: '',
    //                     Website: '',
    //                     Rating: ''
    //                 };

    //                 itemToPush.AccountURL = '/lightning/r/Account' + `/${item['Id']}/view`
    //                 itemToPush.Name = item['Name'];
    //                 itemToPush.Type = item['Type'];
    //                 itemToPush.AnnualRevenue = item['AnnualRevenue'];
    //                 itemToPush.Phone = item['Phone'];
    //                 itemToPush.Website = item['Website'];
    //                 itemToPush.Rating = item['Rating'];

    //                 // console.log(item['Name']);
    //                 // console.log(item['AnnualRevenue']);
    //                 console.log(itemToPush.AnnualRevenue);

    //                 items.push(itemToPush);
    //             })
    //             this.accList = items;
    //             //this.accList.forEach(item => item['AccountURL'] = '/lightning/r/Account/' + item['Id'] + '/view');
    //         }
    //         console.log(this.accList);
    //     }).catch(error => {
    //         console.log('Error: ' + error);
    //     });
    // }
}


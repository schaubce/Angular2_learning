import {Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
    selector: 'pm-app',
    template:
    `<div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>`,

    //adding the service to the root component so it can be used by all components
    // this can be injected within a constructor within a class
    providers: [ProductService]
})

export class AppComponent{
    pageTitle: string = 'Acme Product Management';
}
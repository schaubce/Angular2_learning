import {Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
    selector: 'pm-app',
    template:
    `<div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,

    //adding the service to the root component so it can be used by all components
    // this can be injected within a constructor within a class
    providers: [ProductService]
})

export class AppComponent{
    pageTitle: string = 'Acme Product Management';
}
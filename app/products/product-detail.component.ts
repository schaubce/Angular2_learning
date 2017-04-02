import {Component} from "@angular/core";
import {IProduct} from "./product";


@Component({
    //selector is only required if the component will be
    //nested within another component
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent {
    product: IProduct;
    pageTitle : string = 'Product Detail';
}
import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";


@Component({
    //selector is only required if the component will be
    //nested within another component
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    product: IProduct;
    pageTitle : string = 'Product Detail';
    //errorMessage: string;

    constructor(private _route:ActivatedRoute, private _router: Router, private _productService: ProductService){

    }

    //allows us to have snapshot routes
    ngOnInit():void{
        // +, javascript shortcut to turn a string into a numeric
        let id = +this._route.snapshot.params['id'];
        //allows us to display id
        this.pageTitle += `: ${id}`;
        console.log(id);
    }

    onBack() : void{
        this._router.navigate(['/products']);
    }
}
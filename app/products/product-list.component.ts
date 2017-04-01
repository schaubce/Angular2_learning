import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
        selector: 'pm-products',
        templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List'
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string; 
    products: IProduct[];

    constructor(private _productService: ProductService){
        //this injects the service
    }
    //events should be after properties
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    //allows us to perform initialization
    ngOnInit():void {
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product List: '  + message;
    }
}
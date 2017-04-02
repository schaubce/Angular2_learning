// creating service class
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import {IProduct} from './product';

// encapsulates data so components can be modified for multiple purposes
// and not be focused on the data
@Injectable()
export class ProductService {
    //usually you can point this to an appropriate webserver & write serverside code to
    //and write the server-side code to send the list of products
    private _productURL = 'api/products/products.json';

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]>{
       return this._http.get(this._productURL)
           .map((response:Response) => <IProduct[]> response.json())
           .do(data => console.log('All: ' + JSON.stringify(data)))
           .catch(this.handleError);
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
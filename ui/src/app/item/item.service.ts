import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ItemComponent } from './item.component';
import { Item } from './item';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService{

	private itemUrl = 'http://localhost:4200/api/items';

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http){
	}

	//get one item
  	getItem(id: number): Promise<Item>{
		const url = `${this.itemUrl}/${id}`;
  		return this.http.get(url)
    		.toPromise()
    		.then(response => response.json() as Item);
    		//.catch(this.handleError);
  	}

  	//get all items
	getItems(): Promise<Item[]> {
		console.log("getting items");
		return this.http.get(this.itemUrl)
			.toPromise()
			//.then(response => response.json().embedded.items as Item[]);
			.then(response => response.json() as Item[]);
	  		//.catch(this.handleError);
	}

  	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error);
	    return Promise.reject(error.message || error);
  	}


 //  	update(item: Item): Promise<Item> {
	//   const url = `${this.itemUrl}/${item.id}`;
	//   return this.http
	//     .put(url, JSON.stringify(item), {headers: this.headers})
	//     .toPromise()
	//     .then(() => item)
	//     .catch(this.handleError);
	// }

	// use(item: Item): Promise<void>{
	// 	const url = `${this.itemUrl}/${item.id}`;
	// 	return this.http
	// 		.put(url, JSON.stringify(item), {headers: this.headers})
	// 		.toPromise()
	//     	.then(() => null)
	//     	.catch(this.handleError);
	// }

	//@TODO
	create(name: string): Promise<Item> {
 		return this.http
    	 .post(this.itemUrl, JSON.stringify({name: name}), {headers: this.headers})
    	 .toPromise()
    	 .then(res => res.json())
    	 .catch(this.handleError);
	}
    
 //    delete(id: number): Promise<void> {
	//   const url = `${this.itemUrl}/${id}`;
	//   return this.http.delete(url, {headers: this.headers})
	//     .toPromise()
	//     .then(() => null)
	// }
	    
}

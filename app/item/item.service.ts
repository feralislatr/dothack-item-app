import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ItemComponent } from './item.component';
import { Item } from './item';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService{

	private itemUrl = 'items';

	constructor(private http: Http){
	}

	getItems(): Promise<Item[]> {
	 return this.http.get(this.itemUrl)
	  .toPromise()
	  .then(response => response.json()._embedded.items as Item[])
	  .catch(this.handleError);
	}

  	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error);
	    return Promise.reject(error.message || error);
  	}

  	getItem(id: number): Promise<Item>{
  		const url = `${this.itemUrl}/${id}`;
	  	return this.http.get(url)
	    	.toPromise()
	    	.then(response => response.json() as Item)
	    	.catch(this.handleError);
  	}


  	update(){

  	}


  	use(){

  	}

  	create(){

  	}

  	delete(){

  	}
}
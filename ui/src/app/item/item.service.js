"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.itemUrl = 'http://localhost:4200/api/items';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    //get one item
    ItemService.prototype.getItem = function (id) {
        var url = this.itemUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    //get all items
    ItemService.prototype.getItems = function () {
        console.log("getting items");
        return this.http.get(this.itemUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    ItemService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
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
    ItemService.prototype.create = function (name) {
        return this.http
            .post(this.itemUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map
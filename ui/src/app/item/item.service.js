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
        this.currId = 4;
        this.newId = 4;
    }
    ItemService.prototype.getId = function () {
        // console.log("getting id");
        // var items = this.http.get(this.itemUrl);
        // items.subscribe(itemsArr => itemsArr = itemsArr);
        // var currId = (this.itemsArr.slice(-1)[0]).id;
        // currId++;
        // console.log("the next id will be"+currId);
        this.currId += 1;
        return this.currId;
    };
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
    // update(item: Item): Promise<Item> {
    //   const url = `${this.itemUrl}/${item.id}`;
    //   return this.http
    //     .put(url, JSON.stringify(item), {headers: this.headers})
    //     .toPromise()
    //     .then(() => item)
    //     .catch(this.handleError);
    // }
    ItemService.prototype.use = function (item) {
        var url = this.itemUrl + "/" + item.id + "/use";
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function () { return item; });
        //.catch(this.handleError);
    };
    //delete item
    ItemService.prototype.discard = function (item) {
        var url = this.itemUrl + "/" + item.id + "/discard";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; });
    };
    //get prev id and increment by 1
    ItemService.prototype.create = function (quantity, name, desc) {
        var url = this.itemUrl + "/new";
        var newId = this.newId;
        newId++;
        return this.http
            .post(url, JSON.stringify({ id: newId, quantity: quantity, name: name, desc: desc }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ItemService.prototype.delete = function (id) {
        var url = this.itemUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; });
    };
    return ItemService;
}());
__decorate([
    core_1.Input() //test
    ,
    __metadata("design:type", Number)
], ItemService.prototype, "newId", void 0);
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map
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
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var ItemComponent = (function () {
    function ItemComponent(router, itemService) {
        this.router = router;
        this.itemService = itemService;
        this.title = 'Item Inventory';
        this.item = {};
    }
    ItemComponent.prototype.onSelect = function (item) {
        this.currentItem = item;
    };
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("oye");
        console.log(this.items);
        this.itemService.getItems().then(function (items) { return _this.items = items; });
    };
    //bring up item modal
    ItemComponent.prototype.getInfo = function () {
        this.router.navigate(['/info', this.currentItem.id]);
    };
    //@TODO
    ItemComponent.prototype.create = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.itemService.create(name)
            .then(function (item) {
            _this.items.push(item);
            _this.currentItem = null;
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css'],
        providers: [item_service_1.ItemService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        item_service_1.ItemService])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map
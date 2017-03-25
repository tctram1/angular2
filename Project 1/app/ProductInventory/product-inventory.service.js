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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductInventoryService = (function () {
    function ProductInventoryService(_http) {
        this._http = _http;
        this._productUrl = 'api/products/product-inventory.json';
    }
    ProductInventoryService.prototype.getInventory = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.table(data); })
            .catch(this.handleError);
    };
    ProductInventoryService.prototype.getByCategory = function (CatID) {
        console.log("product-inventory.service: getByCategory is called");
        return this.getInventory()
            .map(function (byCategory) { return byCategory.filter(function (p) { return p.Product_Category == CatID; }); })
            .do(function (data) { return console.log("Result of getByCategory service called"); })
            .do(function (data) { return console.table(data); });
    };
    ProductInventoryService.prototype.getInventoryDetail = function (SKU) {
        console.log("product-inventory.service: getInventoryDetail is called");
        return this.getInventory()
            .map(function (detail) { return detail.filter(function (p) { return p.SKU == SKU; }); })
            .do(function (data) { return console.log("Result of getInventoryDetail service called"); })
            .do(function (data) { return console.table(data); });
    };
    ProductInventoryService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return ProductInventoryService;
}()); //end of class
ProductInventoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductInventoryService);
exports.ProductInventoryService = ProductInventoryService;
//# sourceMappingURL=product-inventory.service.js.map
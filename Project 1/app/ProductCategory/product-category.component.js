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
var product_category_service_1 = require("./product-category.service");
var ProductCategoryComponent = (function () {
    function ProductCategoryComponent(_productCategoryService) {
        this._productCategoryService = _productCategoryService;
        this.tableTitle = 'Product Category';
    }
    ProductCategoryComponent.prototype.ngOnInit = function () {
        console.log('In OnInit');
        this.productCategory = this._productCategoryService.getCategory();
    };
    return ProductCategoryComponent;
}()); //end of class
ProductCategoryComponent = __decorate([
    core_1.Component({
        selector: 'sel-productcategory',
        templateUrl: 'app/ProductCategory/product-category.component.html'
    }),
    __metadata("design:paramtypes", [product_category_service_1.ProductCategoryService])
], ProductCategoryComponent);
exports.ProductCategoryComponent = ProductCategoryComponent;
//# sourceMappingURL=product-category.component.js.map
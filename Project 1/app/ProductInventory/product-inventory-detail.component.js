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
var router_1 = require("@angular/router");
var product_inventory_service_1 = require("./product-inventory.service");
var ProductInventoryDetailComponent = (function () {
    function ProductInventoryDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.tableTitle = 'Product Inventory Detail';
        this.imageWidth = 300;
        this.imageMargin = 25;
    }
    ProductInventoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('In OnInit to get SKU for getInventoryDetail');
        this.sub = this._route.params.subscribe(function (params) {
            var SKU = +params['SKU'];
            _this.getInventoryDetail(SKU);
        });
    };
    ProductInventoryDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductInventoryDetailComponent.prototype.getInventoryDetail = function (SKU) {
        var _this = this;
        this._productService.getInventoryDetail(SKU).subscribe(function (detail) { return _this.productInventory = detail; }, function (error) { return _this.errorMessage = error; });
    };
    ProductInventoryDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return ProductInventoryDetailComponent;
}()); //end of class
ProductInventoryDetailComponent = __decorate([
    core_1.Component({
        selector: 'sel-productinventorydetail',
        templateUrl: 'app/ProductInventory/product-inventory-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_inventory_service_1.ProductInventoryService])
], ProductInventoryDetailComponent);
exports.ProductInventoryDetailComponent = ProductInventoryDetailComponent;
//# sourceMappingURL=product-inventory-detail.component.js.map
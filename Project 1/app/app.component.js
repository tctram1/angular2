"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_category_service_1 = require("./ProductCategory/product-category.service");
var product_inventory_service_1 = require("./ProductInventory/product-inventory.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Tuyen Tram - Project 1';
        this.pageSubtitle = 'Moving CIS 340 Project 3 to Angular 2';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n        <div class='container'>\n\n            <nav class='navbar navbar-default'>\n                <div class='container-fluid'>\n                    <a class='navbar-brand'>{{ pageTitle }}</a>\n                    <ul class='nav navbar-nav'>\n                        <li>\n                            <a [routerLink]=\"['/home']\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/category']\">\n                                Category List\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/products']\">\n                                Inventory List\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n\n            <div>\n                <router-outlet></router-outlet>\n            <div>\n\n        </div>\n    ",
        providers: [
            product_category_service_1.ProductCategoryService,
            product_inventory_service_1.ProductInventoryService
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
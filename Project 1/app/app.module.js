"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var product_category_component_1 = require("./ProductCategory/product-category.component");
var product_inventory_component_1 = require("./ProductInventory/product-inventory.component");
var product_inventory_pipe_1 = require("./ProductInventory/product-inventory.pipe");
var product_inventory_detail_component_1 = require("./ProductInventory/product-inventory-detail.component");
var product_inventory_byCategory_component_1 = require("./ProductInventory/product-inventory-byCategory.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'category', component: product_category_component_1.ProductCategoryComponent },
                { path: 'products', component: product_inventory_component_1.ProductInventoryComponent },
                { path: 'category/:CatID', component: product_inventory_byCategory_component_1.ProductInventoryByCategoryComponent },
                { path: 'products/:SKU', component: product_inventory_detail_component_1.ProductInventoryDetailComponent },
                { path: 'home', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            product_category_component_1.ProductCategoryComponent,
            product_inventory_component_1.ProductInventoryComponent,
            product_inventory_pipe_1.ProductFilterPipe,
            product_inventory_detail_component_1.ProductInventoryDetailComponent,
            product_inventory_byCategory_component_1.ProductInventoryByCategoryComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
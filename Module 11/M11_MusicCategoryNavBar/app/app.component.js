"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var music_categories_service_1 = require("./MusicCategories/music-categories.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Ex M11';
        this.pageSubtitle = 'Moving musisc inventory into MusicCategoryService';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n    <div>\n        <nav class='nanbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>\n                    {{ pageTitle }}\n                </a>\n                <ul class='nav navbar-nav'>\n                    <li>\n                        <a [routerLink]=\"['/products']\">\n                            Product List\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/categories']\">\n                            Category List\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n        <br>\n\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n\n    </div>\n    ",
        providers: [music_categories_service_1.MusicCategoryService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
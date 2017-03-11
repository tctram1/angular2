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
var music_categories_service_1 = require("./music-categories.service");
var MusicCategoriesComponent = (function () {
    //Constructor
    function MusicCategoriesComponent(_musicCategoryService) {
        this._musicCategoryService = _musicCategoryService;
        this.tableTitle = 'Music Categories';
    }
    //OnInit
    MusicCategoriesComponent.prototype.ngOnInit = function () {
        console.log('In OnInit');
        this.musicCategories = this._musicCategoryService.getCategory();
    };
    return MusicCategoriesComponent;
}()); //end of class
MusicCategoriesComponent = __decorate([
    core_1.Component({
        selector: 'sel-musiccategories',
        templateUrl: 'app/MusicCategories/music-categories.component.html'
    }),
    __metadata("design:paramtypes", [music_categories_service_1.MusicCategoryService])
], MusicCategoriesComponent);
exports.MusicCategoriesComponent = MusicCategoriesComponent;
//# sourceMappingURL=music-categories.component.js.map
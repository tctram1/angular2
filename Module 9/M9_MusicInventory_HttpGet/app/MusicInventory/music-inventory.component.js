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
var music_inventory_service_1 = require("./music-inventory.service");
var MusicInventoryComponent = (function () {
    function MusicInventoryComponent(_musicInventoryService) {
        this._musicInventoryService = _musicInventoryService;
        this.tableTitle = 'Music Inventory';
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.musicInventory = [];
    }
    ;
    MusicInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('In OnInit');
        this._musicInventoryService.getInventory()
            .subscribe(function (musicInventory) { return _this.musicInventory = musicInventory; }, function (error) { return _this.errorMessage = error; });
    };
    return MusicInventoryComponent;
}()); //end of class
MusicInventoryComponent = __decorate([
    core_1.Component({
        selector: 'sel-musicinventory',
        templateUrl: 'app/MusicInventory/music-inventory.component.html'
    }),
    __metadata("design:paramtypes", [music_inventory_service_1.MusicInventoryService])
], MusicInventoryComponent);
exports.MusicInventoryComponent = MusicInventoryComponent;
//# sourceMappingURL=music-inventory.component.js.map
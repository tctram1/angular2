"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MusicInventoryComponent = (function () {
    function MusicInventoryComponent() {
        this.tableTitle = 'Music Inventory';
        this.musicInventory = [
            {
                "productID": "00305",
                "title": "iDios!",
                "artist": "Green Day",
                "genre": 1,
                "yearReleased": "2013",
                "productPrice": 11
            },
            {
                "productID": "022677",
                "title": "Crash My Party",
                "artist": "Luke Bryan",
                "genre": 5,
                "yearReleased": "2013",
                "productPrice": 14
            },
            {
                "productID": "136488",
                "title": "My Head Is an Animal",
                "artist": "Of Monsters and Men",
                "genre": 2,
                "yearReleased": "2011",
                "productPrice": 14
            },
            {
                "productID": "465222",
                "title": "AM",
                "artist": "Artic Monkeys",
                "genre": 1,
                "yearReleased": "2013",
                "productPrice": 13
            }
        ];
    }
    return MusicInventoryComponent;
}());
MusicInventoryComponent = __decorate([
    core_1.Component({
        selector: 'sel-musicinventory',
        templateUrl: 'app/MusicInventory/music-inventory.component.html'
    })
], MusicInventoryComponent);
exports.MusicInventoryComponent = MusicInventoryComponent;
//# sourceMappingURL=music-inventory.component.js.map
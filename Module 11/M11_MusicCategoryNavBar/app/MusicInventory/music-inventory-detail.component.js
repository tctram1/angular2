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
var MusicInventoryDetailComponent = (function () {
    function MusicInventoryDetailComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.tableTitle = 'Music Inventory Detail';
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
    MusicInventoryDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params['id'];
        this.tableTitle += ": " + id;
    };
    MusicInventoryDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return MusicInventoryDetailComponent;
}()); //end of class
MusicInventoryDetailComponent = __decorate([
    core_1.Component({
        selector: 'sel-musicinventorydetail',
        templateUrl: 'app/MusicInventory/music-inventory-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], MusicInventoryDetailComponent);
exports.MusicInventoryDetailComponent = MusicInventoryDetailComponent;
//# sourceMappingURL=music-inventory-detail.component.js.map
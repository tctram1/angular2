import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'sel-musicinventorydetail',

    templateUrl: 'app/MusicInventory/music-inventory-detail.component.html'
})

export class MusicInventoryDetailComponent implements OnInit {
    tableTitle: string = 'Music Inventory Detail';
    musicInventory: any[] = [
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


    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }


    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.tableTitle += `: ${id}`;
    }


    onBack(): void {
        this._router.navigate(['/products']);
    }




}//end of class
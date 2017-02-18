import { Component } from '@angular/core';

@Component({
    selector: 'sel-musicinventory',

    templateUrl: 'app/MusicInventory/music-inventory.component.html'
})

export class MusicInventoryComponent {
    tableTitle: string = 'Music Inventory';

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
}
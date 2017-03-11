import { Component, OnInit } from '@angular/core';

import { IMusicInventory } from './music-inventory';

import { MusicInventoryService } from './music-inventory.service';

@Component({
    selector: 'sel-musicinventory',

    templateUrl: 'app/MusicInventory/music-inventory.component.html'
})

export class MusicInventoryComponent implements OnInit {
    tableTitle: string = 'Music Inventory';
    imageWidth: number = 100;
    imageMargin: number = 2;
    errorMessage: string;

    musicInventory: IMusicInventory[] = [];
        
    constructor(private _musicInventoryService: MusicInventoryService){};

    ngOnInit(): void {
        console.log('In OnInit');
        this._musicInventoryService.getInventory()
                .subscribe(musicInventory => this.musicInventory = musicInventory,
                            error => this.errorMessage = <any>error);
    }


}//end of class
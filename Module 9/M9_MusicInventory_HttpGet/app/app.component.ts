import { Component } from '@angular/core';

import { MusicCategoryService } from './MusicCategories/music-categories.service';
import { MusicInventoryService } from './MusicInventory/music-inventory.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <h4>{{pageSubtitle}}</h4>
        <sel-musicinventory></sel-musicinventory>
    </div>
    `,
    providers: [ MusicCategoryService, MusicInventoryService ]
})

export class AppComponent {
    pageTitle: string = 'Exercise M9: http.get() service';

    pageSubtitle: string = 'Moving musisc inventory into musicproducts.json';
}

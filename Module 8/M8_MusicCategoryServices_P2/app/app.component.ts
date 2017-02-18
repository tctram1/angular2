import { Component } from '@angular/core';

import { MusicCategoryService } from './MusicCategories/music-categories.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <h4>{{pageSubtitle}}</h4>
        <sel-musiccategories></sel-musiccategories>
        <sel-musicinventory></sel-musicinventory>
    </div>
    `,
    providers: [ MusicCategoryService ]
})

export class AppComponent {
    pageTitle: string = 'Exercise M8: MusicCategoryService';

    pageSubtitle: string = 'Moving musisc inventory into MusicCategoryService';
}

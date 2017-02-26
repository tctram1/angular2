import { Component } from '@angular/core';

import { MusicCategoryService } from './MusicCategories/music-categories.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='nanbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>
                    {{ pageTitle }}
                </a>
                <ul class='nav navbar-nav'>
                    <li>
                        <a [routerLink]="['/products']">
                            Product List
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="['/categories']">
                            Category List
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <br>

        <div class='container'>
            <router-outlet></router-outlet>
        </div>

    </div>
    `,
    providers: [ MusicCategoryService ]
})

export class AppComponent {
    pageTitle: string = 'Ex M11';

    pageSubtitle: string = 'Moving musisc inventory into MusicCategoryService';
}

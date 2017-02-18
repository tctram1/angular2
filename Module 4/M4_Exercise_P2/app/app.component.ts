import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <h4>{{pageSubtitle}}</h4>
        <sel-musicinventory></sel-musicinventory>
    </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Our Music Inventory';

    pageSubtitle: string = 'Kurata Module 4 - Exercise 1 - Part 2';
}

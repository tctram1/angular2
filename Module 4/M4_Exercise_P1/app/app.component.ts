import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div> <h1>{{pageTitle}}</h1>
        <sel-musiccategories></sel-musiccategories>
    </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Kurata Module 4 - Exercise 1 - Part 1';
}

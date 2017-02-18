import { Component } from '@angular/core';

@Component({
    selector: 'hellouniverse-component',
    template: `
    <div>
        <h5>{{pageMessage}}</h5>
    </div>
    `
})

export class HelloUniverseComponent {
    pageMessage: string = "Hello Universe! (From hellouniverse.component)"
}
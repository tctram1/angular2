import { Component } from '@angular/core';

@Component({
    selector: 'hellogalaxy-component',
    template: `
    <div>
        <h5>{{pageMessage}}</h5>
    </div>
    `
})

export class HelloGalaxyComponent {
pageMessage: string = "Hello Galaxy! (From hellogalaxy.component)"
}
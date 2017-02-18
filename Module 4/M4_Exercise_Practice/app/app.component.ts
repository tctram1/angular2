import { Component } from '@angular/core';

@Component({
    selector: 'helloworld-app',
    template: `
    <div>
        <h2>{{pageMessage}}</h2>
        <helloworld-component></helloworld-component>
        <hellogalaxy-component></hellogalaxy-component>
        <hellouniverse-component></hellouniverse-component>
    </div>
    `
})
export class AppComponent {
    pageMessage: string = "Welcome (From AppComponent.pageMessage)";
}

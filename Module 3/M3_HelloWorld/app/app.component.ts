import { Component } from '@angular/core';

@Component({
    selector: 'helloworld-app',
    template: `
    <div>
        <h1>{{pageMessage}}</h1>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = `Acme Product Management`;
    pageMessage: string = "Hello World!"
}

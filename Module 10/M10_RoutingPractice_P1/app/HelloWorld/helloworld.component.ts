import { Component } from '@angular/core';

@Component({
    selector: 'helloworld-component',
    templateUrl: 'app/HelloWorld/helloworld.component.html'
})

export class HelloWorldComponent {
    pageMessage: string = "Hello World! (From helloworld.component)"
}

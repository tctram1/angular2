import { Component } from '@angular/core';

@Component({
    selector: 'hellogalaxy-component',
    templateUrl: 'app/HelloGalaxy/hellogalaxy.component.html'
})

export class HelloGalaxyComponent {
    pageMessage: string = "Hello Galaxy! (From hellogalaxy.component)"
}
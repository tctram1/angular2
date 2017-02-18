import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './HelloWorld/helloworld.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent,
                 HelloWorldComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

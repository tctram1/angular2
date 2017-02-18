import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './HelloWorld/helloworld.component';
import { HelloGalaxyComponent } from './HelloGalaxy/hellogalaxy.component';
import { HelloUniverseComponent } from './HelloUniverse/hellouniverse.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent,
                 HelloWorldComponent,
                 HelloGalaxyComponent,
                 HelloUniverseComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

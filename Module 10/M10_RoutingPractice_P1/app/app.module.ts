import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { HelloWorldComponent } from './HelloWorld/helloworld.component';
import { HelloGalaxyComponent } from './HelloGalaxy/hellogalaxy.component';
import { CalculatorComponent } from './Calculator/calculator.component';

@NgModule({
  imports: [  
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'helloworld', component: HelloWorldComponent },
        { path: 'hellogalaxy', component: HelloGalaxyComponent },
        { path: 'calculator', component: CalculatorComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])   
  ],

  declarations: [
    AppComponent,
    WelcomeComponent,
    HelloWorldComponent,
    HelloGalaxyComponent,
    CalculatorComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

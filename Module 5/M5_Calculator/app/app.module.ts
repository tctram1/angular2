import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './Calculator/calculator.component';

@NgModule({
    imports: [  BrowserModule,
                FormsModule   ],
  declarations: [AppComponent,
                 CalculatorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

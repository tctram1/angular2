import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './Calculator/calculator.component';
import { CalculatorMultipleComponent } from './CalculatorMultiple/calculatormultiple.component';
import { CalculatorDivideComponent } from './CalculatorDivide/calculatordivide.component';
import { CalculatorAddComponent } from './CalculatorAdd/calculatoradd.component';
import { CalculatorSubstractComponent } from './CalculatorSubstract/calculatorsubstract.component';

@NgModule({
  imports: [  
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
      { path: 'multiple', component: CalculatorMultipleComponent },
      { path: 'divide', component: CalculatorDivideComponent },
      { path: 'add', component: CalculatorAddComponent },
      { path: 'substract', component: CalculatorSubstractComponent },
      { path: '', redirectTo: 'multiple', pathMatch: 'full' }

    ])

    ],

  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorMultipleComponent,
    CalculatorDivideComponent,
    CalculatorAddComponent,
    CalculatorSubstractComponent 
    
    ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

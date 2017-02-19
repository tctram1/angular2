"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var calculator_component_1 = require("./Calculator/calculator.component");
var calculatormultiple_component_1 = require("./CalculatorMultiple/calculatormultiple.component");
var calculatordivide_component_1 = require("./CalculatorDivide/calculatordivide.component");
var calculatoradd_component_1 = require("./CalculatorAdd/calculatoradd.component");
var calculatorsubstract_component_1 = require("./CalculatorSubstract/calculatorsubstract.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'multiple', component: calculatormultiple_component_1.CalculatorMultipleComponent },
                { path: 'divide', component: calculatordivide_component_1.CalculatorDivideComponent },
                { path: 'add', component: calculatoradd_component_1.CalculatorAddComponent },
                { path: 'substract', component: calculatorsubstract_component_1.CalculatorSubstractComponent },
                { path: '', redirectTo: 'multiple', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            calculator_component_1.CalculatorComponent,
            calculatormultiple_component_1.CalculatorMultipleComponent,
            calculatordivide_component_1.CalculatorDivideComponent,
            calculatoradd_component_1.CalculatorAddComponent,
            calculatorsubstract_component_1.CalculatorSubstractComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
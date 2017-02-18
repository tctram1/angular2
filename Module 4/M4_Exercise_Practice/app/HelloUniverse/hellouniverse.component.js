"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HelloUniverseComponent = (function () {
    function HelloUniverseComponent() {
        this.pageMessage = "Hello Universe! (From hellouniverse.component)";
    }
    return HelloUniverseComponent;
}());
HelloUniverseComponent = __decorate([
    core_1.Component({
        selector: 'hellouniverse-component',
        template: "\n    <div>\n        <h5>{{pageMessage}}</h5>\n    </div>\n    "
    })
], HelloUniverseComponent);
exports.HelloUniverseComponent = HelloUniverseComponent;
//# sourceMappingURL=hellouniverse.component.js.map
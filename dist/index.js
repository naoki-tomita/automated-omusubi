"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const map = new Map();
const named = (Target) => {
    map.set(Target, new Target());
};
const inject = (Target, key) => {
    Target[key] = map.get(Reflect.getMetadata("design:type", Target, key));
};
let Injectable = class Injectable {
    constructor() {
        this.x = "foo";
        this.y = "bar";
    }
};
Injectable = __decorate([
    named
], Injectable);
class Injected {
    call() {
        console.log(this.foo);
    }
}
__decorate([
    inject,
    __metadata("design:type", Injectable)
], Injected.prototype, "foo", void 0);
new Injected().call();

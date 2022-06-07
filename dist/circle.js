"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius, color) {
        this._radius = 1;
        this._color = 'pink';
        this._radius = radius;
        this._color = color;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    getArea() {
        return Math.PI * this._radius * this._radius;
    }
    toString() {
        return `A circle with radius = ${this._radius}`;
    }
}
exports.Circle = Circle;

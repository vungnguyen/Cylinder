"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const circle_1 = require("./circle");
class Cylinder extends circle_1.Circle {
    constructor(height, radius, color) {
        super(radius, color);
        this._height = 1.0;
        this._height = height;
    }
    getHeight() {
        return this._height;
    }
    setHeight(height) {
        this._height = height;
    }
    getVolume() {
        return super.getArea() * this._height;
    }
    toString() {
        return super.toString();
    }
}
exports.Cylinder = Cylinder;

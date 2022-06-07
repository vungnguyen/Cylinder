import {Circle} from "./circle";
export class Cylinder extends Circle{
    private _height: number = 1.0;
    constructor(height: number, radius: number, color: string) {
        super(radius,color);
        this._height = height;
    }
    getHeight(): number {
        return this._height;
    }
    setHeight(height: number) {
        this._height = height;
    }
    getVolume(): number {
        return super.getArea()*this._height;
    }
    toString(): string {
        return super.toString();
    }
}
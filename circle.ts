export class Circle {
    private _radius: number =1;
    private _color: string = 'pink';

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }
    get radius(): number {
        return this._radius;
    }
    set radius(radius: number) {
        this._radius = radius;
    }
    get color(): string {
        return this._color;
    }
    set color(color: string) {
        this._color = color;
    }
    getArea() : number {
        return Math.PI*this._radius*this._radius;
    }
    toString() : string {
        return `A circle with radius = ${this._radius}`
    }
}
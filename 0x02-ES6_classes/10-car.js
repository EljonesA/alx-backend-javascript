const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this[cloneSymbol] = () => {
      const clonedCar = new Car(this._brand, this._motor, this._color);
      return clonedCar;
    };
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}

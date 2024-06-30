export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // string method
  toString() {
    return `[object ${this._code}]`;
  }
}

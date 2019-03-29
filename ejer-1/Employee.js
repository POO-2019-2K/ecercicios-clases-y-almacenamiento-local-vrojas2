export default class Employee {
    constructor(employee) {
      this._name = employee.name.toUpperCase();
      this._numCuenta = employee.numCuenta;
    }
  
    get numCuenta() {
      return this._numCuenta;
    }

    get name() {
      return this._name;
    }
   
  }
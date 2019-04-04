export default class Employee {
    constructor(employee) {
      this._deposito = employee.deposito;
      this._retiro = employee.retiro;
    }
  
    get retiro() {
      return this._retiro;
    }

    get deposito() {
      return this._deposito;
    }
   
  }
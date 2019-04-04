export default class Employee {
    constructor(employee) {
      this._deposito = employee.deposito;
      this._retiro = employee.retiro;
      this._cuenta = employee.cuenta;
    }
  
    get cuenta() {
      return this._cuenta;
    }
    
    get retiro() {
      return this._retiro;
    }

    get deposito() {
      return this._deposito;
    }
   
    getSaldo() {
      let saldo =
      this._cuenta + this._deposito
    }

  }
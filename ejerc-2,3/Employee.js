export default class Employee {
  constructor(employee) {
      this._depositar = employee.depositar;
      this._retirar = employee.retirar;
  }

  get depositar() {
      return this._depositar;
  }

  get retirar() {
      return this._retirar;
  }

  getSaldo() {
      let saldo = Number(this._depositar) - Number(this._retirar)
      return saldo;
  }
}
import Employee from "./Employee.js";

export default class Saldo {
  constructor(tablaSaldoCu) {
    this._tablaSaldoCu = tablaSaldoCu;
    this._numEmployees = 0;
    this._SaldoTotal = 0;
    this._sinSaldo = "Sin Saldo";
    this._incorrectSaldo = "Saldo incorrcto";
    //localStorage.removeItem(employees);  
    this._employees = [];
    
    this._initTables();
  }



  _initTables() {
    let lsEmployees = JSON.parse(localStorage.getItem("employees"));

    if(lsEmployees === null){
      return;
    }
    lsEmployees.forEach((e, index) => {

      this._showInTable(new Employee(e));
      
      //this._addToTable(new Employee(e));
    });
  }



  _showInTable(employee) {
    let row = this._tablaSaldoCu.insertRow(-1);

    if(this._SaldoTotal = 0){
      this._sinSaldo
    } else if (this._SaldoTotal < 0 ){
     this._incorrectSaldo
    } else if (this._SaldoTotal > 0){
      this._SaldoTotal = (this._SaldoTotal + cellDeposito.innerHTML);
      this._SaldoTotal = (this._SaldoTotal - cellRetiro.innerHTML);
      this._SaldoTotal
    }


      let objEmployee = {
        cuenta: employee.cuenta,
        retiro: employee.retiro,
        deposito: employee.deposito,
      }
      this._employees.push(objEmployee);
  }
  addEmployee(employee) {
    this._showInTable(employee);
      localStorage.setItem("employees", JSON.stringify(this._employees));
      console.log(localStorage.getItem("employees"));
  }
}
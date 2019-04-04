import Employee from "./Employee.js";

export default class Saldo {
  constructor(tablaSaldoCu) {
    this._tablaSaldoCu = tablaSaldoCu;
    //this._tableInfo = tableInfo;
    this._numEmployees = 0;
    this._SaldoTotal = 0;
    this._sinSaldo = "Sin Saldo";
    this._incorrectSaldo = "Saldo incorrcto";

    this._employees = [];
    
    this._initTables();
  }

  _initTables() {
    let employees = JSON.parse(localStorage.getItem("employees"));
    if(employees === null){
      return;
    }
    employees.forEach((employee, index) => {
     /*employee.birthday = new Date(employee.birthday);
      employee.dateContratacion = new Date(employee.dateContratacion);*/
      this._showInTable(new Employee(employee));
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

    let cellDeposito = row.insertCell(1);
    let cellRetiro = row.insertCell(2);

    cellDeposito.innerHTML = ("+$",employee.deposito);
    cellRetiro.innerHTML = ("-$",employee.retiro);


      let objEmployee = {
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
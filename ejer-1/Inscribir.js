import Employee from "./Employee.js";

export default class Inscribir {
  constructor(tableInscribir) {
    this._tableInscribir = tableInscribir;
    //this._tableInfo = tableInfo;
    this._numEmployees = 0;
    /*this._sumAge = 0;
    this._contSueldo = 0;
    this._numSueldo1 = 1;
    this._numSueldo2 = 1;
    this._numSueldo3 = 1;*/
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
    let row = this._tableInscribir.insertRow(-1);

    let cellNumCuenta = row.insertCell(0);
    let cellName = row.insertCell(1);

    cellNumCuenta.innerHTML = employee.numCuenta;
    cellName.innerHTML = employee.name;

      let objEmployee = {
        name: employee.name,
        numCuenta: employee.numCuenta,
      }
      this._employees.push(objEmployee);
  }
  addEmployee(employee) {
    this._showInTable(employee);
      localStorage.setItem("employees", JSON.stringify(this._employees));
      console.log(localStorage.getItem("employees"));
  }
}
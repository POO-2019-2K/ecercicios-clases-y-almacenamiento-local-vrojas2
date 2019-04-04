import Employee from "./Employee.js";

export default class Inscribir {
  constructor(tableInscribir) {
    this._tableInscribir = tableInscribir;
    this._employees = [];
    //localStorage.removeItem(employees);  
    this._initTables();
  }

  _initTables() {
    let lsEmployees = JSON.parse(localStorage.getItem("employees"));

    if(lsEmployees === null){
      return;
    }
    lsEmployees.forEach((e, index) => {

      this._addToTable(new Employee(e));
      
      //this._addToTable(new Employee(e));
    });

  }

  _addToTable(employee) {
    let row = this._tableInscribir.insertRow(-1);

    let cellNumCuenta = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellAsistencia = row.insertCell(2);

    cellNumCuenta.innerHTML = employee.numCuenta;
    cellName.innerHTML = employee.name;
    cellAsistencia.innerHTML = employee.asistencia;

      let objEmployee = {
        name: employee.name,
        numCuenta: employee.numCuenta
      }
      this._employees.push(objEmployee);
  }
  
  _findEmployee(numCuenta) {
    let foundAt = -1;
    this._employees.forEach((e, index) => {
      if(e.numCuenta === numCuenta) {
        foundAt = index;
        return;
      }
    });
    return foundAt;
  }

  addEmployee(employee) {
    let found = this._findEmployee(employee.numCuenta);
    
    if(found >= 0) {
      Swal.fire({
        type: "error",
        title: "Error",
        text: "El alumno ya existe"
      });
      return;
    }
    if (found < 0){
      Swal.fire({
        type: "success",
        title: "Success",
        text: "El alumno registrado"
      });
    }
    this._addToTable(employee);
    localStorage.setItem("employees", JSON.stringify(this._employees));
  }
}
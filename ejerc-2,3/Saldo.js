import Employee from "./Employee.js";

export default class Saldo {
    constructor(tablaSaldo) {
        this._tablaSaldo = tablaSaldo;
        this._employees = [];
        
        this._initTables();
    }

    _initTables() {
        let lsEmployees = JSON.parse(localStorage.getItem("employees"));
        if(lsEmployees === null) {
            return;
        }
        lsEmployees.forEach((employee, index) => {
            this._addToTable(new Employee(employee));
        });
    }
    _addToTable(employee){
        let row = this._tablaSaldo.insertRow(-1);

        let cellDepositar = row.insertCell(0);
        let cellRetirar = row.insertCell(1);
        let cellSaldo = row.insertCell(2);

        cellDepositar.innerHTML = employee.depositar;
        cellRetirar.innerHTML = employee.retirar;
        cellSaldo.innerHTML = employee.getSaldo();


        let objEmployee = {
            depositar: employee.depositar,
            retirar: employee.retirar
        }
        this._employees.push(objEmployee);
    }

    addEmployee(employee) {
        this._addToTable(employee);
        localStorage.setItem("employees", JSON.stringify(this._employees));
    }
}
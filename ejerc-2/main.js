import Saldo from "./Saldo";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let saldo = new Saldo(
      document.querySelector("#SaldoCu"),
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      
     if(form.checkValidity() === true) {
      let retiro = document.querySelector("#retiro").value;
      let deposito = document.querySelector("#deposito").value;
      let cuenta = document.querySelector("#cuenta").value

      let objEmployee = {
        cuenta: cuenta,
        retiro: retiro,
        deposito: deposito,
      }

      let employee = new Employee(objEmployee);

      saldo.addEmployee(employee);
     }

     form.classList.add("was-validated");
    });
  }
}

let m = new Main();

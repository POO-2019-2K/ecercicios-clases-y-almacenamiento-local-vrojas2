import Saldo from "./Saldo";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let saldo = new Saldo(
      document.querySelector("#SaldoCu"),
      //document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");

     if(form.checkValidity() === true) {
      let retiro = document.querySelector("#retiro").value;
      let deposito = document.querySelector("#deposito").value;

      let objEmployee = {
        retiro: retiro,
        deposito: deposito,
      }

      let employee = new Employee(objEmployee);

      saldo.addEmployee(employee);

     }
      
    });
  }
}

let m = new Main();
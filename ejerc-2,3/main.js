import Saldo from "./Saldo";
import Employee from "./Employee";

class Main {
    constructor() {
        let saldo = new Saldo(document.querySelector("#saldo"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
          let form = document.querySelector("#form");

          if(form.checkValidity() === true) {
            let depositar = document.querySelector("#depositar").value;
            let retirar = document.querySelector("#retirar").value;
    
            let objEmployee = {
                depositar: depositar,
                retirar: retirar
            }
            let employee = new Employee(objEmployee);

            salldo.addEmployee(employee);
          }

        form.classList.add("was-validated");
      });
    }
}

let m = new Main();
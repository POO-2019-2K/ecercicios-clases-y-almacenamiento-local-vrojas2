import Inscribir from "./Inscribir.js";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let inscribir = new Inscribir(
      document.querySelector("#Inscribir"),
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");

      if(form.checkValidity() === true) {
      let name = document.querySelector("#name").value;
      let numCuenta = document.querySelector("#numCuenta").value;

      let objEmployee = {
          name: name,
          numCuenta: numCuenta,
        };

      let employee = new Employee(objEmployee);

      inscribir.addEmployee(employee);
      }
    
     form.classList.add("was-validated");
    });

    document.querySelector("#btnAsist").addEventListener("click", () => {
      let name = document.querySelector("#name").value;
      let numCuenta = document.querySelector("#numCuenta").value;

      let objEmployee = {
        name: name,
        numCuenta: numCuenta,
      };
            
      let employee = new Employee(objEmployee);
      inscribir.addEmployee(employee);
    });
  }
}

let m = new Main();
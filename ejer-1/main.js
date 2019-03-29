import Inscribir from "./Inscribir.js";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let inscribir = new Inscribir(
      document.querySelector("#Inscribir"),
      //document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");

     if(form.checkValidity() === true) {
      let name = document.querySelector("#name").value;
      let numCuenta = document.querySelector("#numCuenta").value;

      let objEmployee = {
        name: name,
        numCuenta: numCuenta,
      }

      let employee = new Employee(objEmployee);

      inscribir.addEmployee(employee);

     }
      
    });
  }
}

let m = new Main();
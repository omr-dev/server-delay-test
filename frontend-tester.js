import axios from "axios";
console.log("code started");
const dataFromServer = (await axios.get("http://localhost:3000")).data;
if (!dataFromServer.employees.length > 0) {
  console.log("No employees found");
}
console.log(dataFromServer);

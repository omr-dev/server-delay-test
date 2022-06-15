import express from "express";
import axios from 'axios';

const app = express();
const port = 3001;
const responseOfServer1 = (await axios.get("http://localhost:3000")).data;
console.log(responseOfServer1);
app.get("/", (req, res) => {
  res.send(`There are ${responseOfServer1.employees.length} employees`);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";

const app = express();
const port = 3000;
const resJSON = {
  employees: [
    {
      id: 1,
      first_name: "Sebastian",
      last_name: "Eschweiler",
      email: "sebastian@codingthesmartway.com",
    },
    {
      id: 2,
      first_name: "Steve",
      last_name: "Palmer",
      email: "steve@codingthesmartway.com",
    },
    {
      id: 3,
      first_name: "Ann",
      last_name: "Smith",
      email: "ann@codingthesmartway.com",
    },
  ],
};
app.get("/", (req, res) => {
  setTimeout(() => {
    res.send(resJSON);
  }, "3000");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

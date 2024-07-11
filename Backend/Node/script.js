// console.log("hello");
// import {generate} from "random-words";
// console.log(generate());

const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`server is live now on  ${port}`);
});

// app.get('/',(req,res)=>{
//     // console.log("Hello Vicky bol raha hu");
//     res.send("Hello Ji ");
// });

app.use("/", (req, res) => {
    // console.log(req,res);
  console.log("request received");

  res.send("hello ji kaise h aaap sab ");
});


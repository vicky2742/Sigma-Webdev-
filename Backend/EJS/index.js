const express = require("express");

let app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`listeing ${port}`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  // console.log(username);
  const ins=require("./data.json");
  let { username } = req.params;
  res.render("instragram.ejs",{data:ins[username]});
});

app.get("/dices", (req, res) => {
  let val = Math.floor(Math.random() * 6) + 1;

  res.render("dice.ejs", { val });
});


// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

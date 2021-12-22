const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const FriendModel = require("./models/Friends");
const FriendModel1 = require("./models/Resume");

app.use(cors());
app.use(express.json());

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb://localhost:27017/tutorialmern?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true }
);

app.post("/addfriend", async (req, res) => {
  const email = req.body.email;
  const Password = req.body.Password;

  const friend = new FriendModel({ email: email, Password: Password });
  await friend.save();
  res.send("Success");
});


app.post("/signup", async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const Address = req.body.Address;
  const Email = req.body.Email;  
  const jobtitle = req.body.jobtitle;
  const ename = req.body.ename;
  const city = req.body.city;

  const signup = new FriendModel1({
    fname: fname,
    lname: lname,
    Address: Address,
    Email: Email,
    jobtitle: jobtitle,
    ename: ename,
    city: city,
  });
  await signup.save();
  res.send("Success");
});


app.get("/insert", async (req, res) => {
  const friend = new FriendModel({ name: "Jessic", age: 38 });
  await friend.save();
  res.send("Inserted DATA");
});

app.get("/read", async (req, res) => {
  FriendModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("You are connected!");
});

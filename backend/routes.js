const express = require("express");
const router = express.Router();
const fs = require("fs");

let todos = [];

router.get("/readtask", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    res.send(JSON.parse(data));
  });
});

router.post("/addtask", (req, res) => {
  let myObj = {
    id: req.body.id,
    title: req.body.title,
    status: req.body.status,
  };

  todos.push(myObj);

  fs.writeFile("data.json", JSON.stringify(todos), (err) => {
    if (err) res.send(err);
    res.send(" Added successfully ");
  });
});

router.delete("/deletetask/:id", (req, res) => {
  todos = JSON.parse(fs.readFileSync("data.json"));

  let my = todos.filter((ele) => {
    return ele.id != req.params.id;
  });

  res.send(my);
});

router.get("/readtask/:id", (req, res) => {
  todos = JSON.parse(fs.readFileSync("data.json"));

  let my = todos.filter((ele) => {
    return ele.id == req.params.id;
  });

  res.send(my);
});

router.put("/updatetask/:id", (req, res) => {
  todos = JSON.parse(fs.readFileSync("data.json"));

  todos.forEach((ele) => {
    if (ele.id == req.params.id) {
      ele.id = req.body.id;
      ele.title = req.body.title;
      ele.status = req.body.status;
    }
  });

  savedata(todos);
  res.send(" Updated Successfully ");
});

router.get("/readtask/:title", (req, res) => {
  todos = JSON.parse(fs.readFileSync("data.json"));

  let my = todos.filter((ele) => {
    return ele.title == req.params.title;
  });

  res.send(my);
});

router.put("/statuschange", (req, res) => {
  todos = JSON.parse(fs.readFileSync("data.json"));

  todos.forEach((ele) => {
    if (ele.id == req.params.id) {
      ele.status = req.body.status;
    }
  });

  savedata(todos);
  res.send(" Status Changed Successfully ");
});

const savedata = (val) => {
  fs.writeFile("data.json", JSON.stringify(val), (err) => {
    if (err) console.error(err);
    console.log("saved data");
  });
};

module.exports = router;

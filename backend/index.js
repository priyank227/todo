const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/todos", require("./routes"));

app.listen(port, () => console.log(` Example app listening on port ${port}`));

// let data = fs.readFileSync("file-test.txt");
// console.log(data.toString());
//   fs.readFile("welcome.html", (err, data) => {
//     if (err) return console.error(err);
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(data);
//     res.end();
//   });

// app.get("/:per", (req, res) => {
//   if (req.params.per >= 70) {
//     res.send(" Distinction ");
//   } else if (req.params.per >= 55) {
//     res.send(" First Class ");
//   } else if (req.params.per >= 45) {
//     res.send(" second Class ");
//   } else if (req.params.per >= 35) {
//     res.send(" third Class ");
//   } else {
//     res.send(" Failed ");
//   }
// });

// app.get("/:data", (req, res) => {
//   fs.writeFile("data.json", JSON.stringify(req.params.data), (err) => {
//     if (err) res.send(err);
//     res.send(" Added successfully ");
//   });
// });

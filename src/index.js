//exercice 0:
console.log("message javascript du serveur");
var myApp = require("simple-hello-world-example");

var msg = myApp.printMsg();

const express = require("express");
const app = express();
app.use("/dream", express.static("public"));
app.listen(3000);

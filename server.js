const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.static(__dirname + "/dist"));
app.use("/api", routes);

let port = 3000;
app.listen(port, _ => console.log(`Server running on port: ${port}`));
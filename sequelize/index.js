// import packages
const express = require("express");
const body_parser = require("body-parser");

// import files
const general_router = require("./routers/general.router");
const customer_router = require("./routers/customer.router");
const database = require("./configurations/connection");

const app = express();
const PORT = 3000;

database.sequelize.sync();

app.use(body_parser.json());

app.use("/", general_router);
app.use("/customer", customer_router);

app.listen(PORT, () => { console.log(`Server Running on PORT => ${PORT}`); });
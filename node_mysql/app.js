const express = require("express");
const general_router = require("./routers/general.router");
const user_router = require("./routers/user.router");
const port = 8080;

const app = express();

app.use(express.json());

app.use("/user", user_router);
app.use("/", general_router);

app.listen(port, () => console.log(`Server Started on Port No ${port}`));

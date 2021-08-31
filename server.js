const express = require("express");
const connectDB = require("./server/datbase/connection");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const route = require("./server/router/route");
const port = 3000;

dotenv.config({ path: ".env" });
connectDB();
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

app.listen(port, () => console.log(`started at http://localhost:${port}`));

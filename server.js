const express = require("express");
const connectDB = require("./server/datbase/connection");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const route = require("./server/router/route");
const port = process.env.PORT || 3000;

console.log(port);
dotenv.config({ path: "config.env" });
connectDB();
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin",
    "Content-Type",
    "X-Requested-With",
    "Access",
    "Authorization"
  );
  if (require.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/", route);

app.listen(port, () => console.log(`started at http://localhost:${port}`));

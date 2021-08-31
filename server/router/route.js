const express = require("express");
const projectDb = require("../model/model");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/", controller.find);
router.put("/api/:id", controller.update);
router.post("/api/new", controller.create);
router.delete("/api/:id", controller.delete);

// module.export = router;
module.exports = router;

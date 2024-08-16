const express = require("express");
const router = express.Router();

const {
  getExcuse,
  randomExcuse,
} = require("../controllers/excusesController.js");

// GET Routes

//GET one excuse by ID
router.get("/random", randomExcuse);
router.get("/:id", getExcuse); // for getting one excuse



module.exports = router;

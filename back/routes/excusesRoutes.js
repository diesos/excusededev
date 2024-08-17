const express = require("express");
const router = express.Router();

const {
  getExcuse,
  randomExcuse,
  postExcuse
} = require("../controllers/excusesController.js");

// GET Routes

//GET one excuse by ID
router.get("/random", randomExcuse);
router.get("/:id", getExcuse); // for getting one excuse

// POST ROUTE
router.post("/create", postExcuse)


module.exports = router;

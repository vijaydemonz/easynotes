// const findAll = require("../controller/notes.controller");
const express = require("express");
var router = express.Router();

const notes = require("../controller/notes.controller.js");
router.post("/notes", notes.create);
router.get("/notes", notes.findAll);
router.get("/notes/:noteId", notes.findOne);
router.put("/notes/:noteId", notes.update);
router.delete("/notes/:noteID", notes.delete);

module.exports = router;

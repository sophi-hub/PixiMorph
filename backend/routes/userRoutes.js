const express = require("express");
const { getUsers, banUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers);
router.post("/ban/:id", banUser);

module.exports = router;

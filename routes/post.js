const express = require("express");
const {
  createPost,
  getAllPost,
  getgetAllPostAdmin,
  getAllPostAdmin
} = require("../controllers/post");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPost", authUser, getAllPost);
router.get("/getAllPostAdmin", getAllPostAdmin);

module.exports = router;

const express = require("express");

const {
  createTask,
  getAllTask,
  getAllTaskName,
  getAllTasks,
  updateTasUser,
  updateTaskStae,
  getAllTaskAll,
  updateTaskComment,
  addTaskUser,
  addTaskLinks,
  updateTaskDesc,
  deleteTask
} = require("../controllers/task");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/createTask", createTask);
router.get("/getAllTask/:state", authUser, getAllTask);
router.get("/getAllTaskAll/:state", getAllTaskAll);
router.get("/getAllTaskName/:name", getAllTaskName);
router.get("/getAllTasks", getAllTasks);
router.put("/updateTaskState", updateTaskStae);
router.get("/updateTaskUser", updateTasUser);
router.put("/addTaskUser", addTaskUser);
router.put("/addTaskLink", addTaskLinks);
router.put("/updadateTaskDesc", updateTaskDesc);
router.put("/updateTaskComment", authUser, updateTaskComment);
router.post("/deleteTask",  deleteTask);
module.exports = router;

const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
  getProfile,
  getAllUser,
  updateProfilePicture,
  updateDetails,
  addUserTask,
  getProfileAdmin,
  addUserTaskhatali
} = require("../controllers/user");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getProfile/:username", authUser, getProfile);
router.get("/getProfileAdmin/:username", getProfileAdmin);
router.put("/updateProfilePicture", authUser, updateProfilePicture);
router.get("/getAllUser", getAllUser);
router.put("/updateDetails", authUser, updateDetails);
router.put("/addUserTaskUpdate", addUserTask);
router.put("/addUserTaskUpdateh", addUserTaskhatali);

module.exports = router;

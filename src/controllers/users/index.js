const loginController = require("./login.controller");
const logoutController = require("./logout.controller");
const registerController = require("./register.controller");
const currentUserController = require("./currentUser.controller");
const updateSubscriptionController = require("./updateSubscription.controller");
const updateAvatarController = require("./updateAvatar.controller")

module.exports = {
  logoutController,
  loginController,
  registerController,
  currentUserController,
  updateSubscriptionController,
  updateAvatarController
};
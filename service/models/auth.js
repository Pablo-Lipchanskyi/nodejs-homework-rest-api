const User = require("../schemas/auth");

const getUser = async (email) => {
    const user = await User.findOne(email)
    if (!user) {
    throw new Error(`Contact with email=${email} not found`);
  }
  return user;
}
module.exports = {
    getUser
}

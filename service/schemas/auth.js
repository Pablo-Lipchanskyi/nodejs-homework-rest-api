const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { hash } = require('bcrypt');

const auth = new Schema(
    {
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
}
)

auth.pre('save', async function () {
  if (this.isNew) {
    this.password = await hash(this.password, 10);
  }
});

const User = mongoose.model('auth', auth)
module.exports = User
const multer = require("multer");
const path = require("path");


const TEMP_DIR = path.join(__dirname, "../", "../", "tmp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, TEMP_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
}).single("avatar");

module.exports = upload;
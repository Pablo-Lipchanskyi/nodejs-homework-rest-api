const express = require('express')
const router = express.Router()

const controller = require("../../controllers/Authorization/index")

router.post('/', controller.registration);
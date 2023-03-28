const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("colors");

const { contactsRouter } = require("./src/routes/contacts.routes");
const { authRouter } = require("./src/routes/auth.routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.all("*", require("./middlewares/badUrlError"));
app.use(require("./middlewares/errorHandler"));

module.exports = app;
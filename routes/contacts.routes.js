const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  getContacts,
  getContactsById,
  createdContact,
  deletedContact,
  updateContactById,
  updatedStatusContact,
} = require("../controllers/contacts/index");

const { validateContact } = require("../validation/contact.validation");

router.use(authMiddleware);

router.get("/", getContacts);
router.get("/:contactId", getContactsById);
router.post("/", validateContact, createdContact);
router.delete("/:contactId", deletedContact);
router.put("/:contactId", validateContact, updateContactById);
router.patch("/:contactId/favorite", updatedStatusContact);

module.exports = { contactsRouter: router };
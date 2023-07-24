const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/drinks");

// const middlewares = require("../../middlewares");
// const schemas = require("../../schemas");
const controllerWrapper = require("../../helpers/controllerWrapper");

// router.get("/", controllerWrapper(controllers.getAll));
// router.get("/:letter", controllerWrapper(controllers.getById));
router.get("/", controllerWrapper(controllers.getFind));
router.get("/search", controllerWrapper(controllers.getBySearch));
router.get("/filter", controllerWrapper(controllers.getFilter));
router.get("/lookup", controllerWrapper(controllers.getById));
router.get("/count", controllerWrapper(controllers.getCount));
// router.get("/category", controllerWrapper(controllers.getByCocktails));
// router.post(
//   "/",
//   middlewares.validateBody(schemas.contact.addContactsSchema),
//   controllerWrapper(controllers.addContact)
// );
//
// router.delete("/:contactId", controllerWrapper(controllers.removeContact));
//
// router.put(
//   "/:contactId",
//   middlewares.validateBody(schemas.contact.addContactsSchema),
//   controllerWrapper(controllers.updateContact)
// );
//
// router.patch(
//   "/:contactId/favorite",
//   middlewares.validateBody(schemas.contact.updateFavoriteByIdSchema),
//   controllerWrapper(controllers.updateFavoriteById)
// );

module.exports = router;

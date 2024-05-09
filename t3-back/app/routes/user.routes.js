module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Retrieve a single User with email and password
  router.get("/:email/:password", users.findOneEmail)

  // Update a User with id
  router.put("/:id/:password", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  app.use("/api/users", router);
};

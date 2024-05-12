module.exports = app => {
  const users = require("../controllers/user.controller.js");
  
  var router = require("express").Router();

  // Create a new User
  router.post("/create", users.create);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);
  
  // Retrieve a single User with email and password
  router.post("/login", users.findOneEmail);

  // Update a User with id
  router.post("/update", users.update);

  app.use("/api/users", router);
};

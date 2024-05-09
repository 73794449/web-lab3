const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password || !req.body.date || !req.body.gender) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    date: req.body.date,
    gender: req.body.gender
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Find a single User by email
exports.findOneEmail = (req, res) => {
  
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const email = req.params.email;
  const password = req.params.password;

  User.findOne({ email: email })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with email " + email });
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with email " + email });
    });

  User.findOne({ email: email, password: password })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Incorrect password for User with email " + email });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with email " + email });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body || !req.body.password) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

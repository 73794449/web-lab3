const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password || !req.body.date || !req.body.gender) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
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
  let somemail = req.body.email;
  User.findOne({ email:  somemail})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with email " + req.params.email });
      else
        {
          if (data.password == req.body.password)
            {
              res.send(data);
            }
            else
              res.status(401).send({message:"Incorrect password"})
        }
      })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with email " + somemail });
    });

};

// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body || !req.body.password) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const userid = req.body.id;
  const newPass = req.body.password;

  console.log(userid);
    User.findByIdAndUpdate(userid, {password: newPass}, {new: true})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${userid}. Maybe User was not found!`
        });
      } else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating User with id=${userid}`
      });
    });
};

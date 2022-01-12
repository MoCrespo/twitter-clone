const express = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = express.Router();

// user modle
const User = require("../../models/User");

// @route post api/users
// @desc  create users
// @access public

router.post("/", (req, res) => {
  const { full_name, user_name, email, password } = req.body;

  // validation
  if (!full_name || !user_name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fileds" });
  }

  // check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      full_name,
      user_name,
      email,
      password,
    });

    // create hash and salt
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            {
              id: user.id,
            },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  full_name: user.full_name,
                  user_name: user.user_name,
                  email: user.email,
                  avatar: user.avatar,
                  cover: user.cover,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;

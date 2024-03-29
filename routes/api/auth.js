const express = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const router = express.Router();

// User model
const User = require("../../models/User");

// @route GET api/auth
// @desc  Auth user
// @access Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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

// @route GET api/auth/user
// @desc  Get user data
// @access Private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

// @route get api/auth/id
// @desc delete user
// @access private

router.delete("/:id", auth, (req, res) => {
  User.deleteOne(req.param.id)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

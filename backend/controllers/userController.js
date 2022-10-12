const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//@desc getUsers
//@route GET /api/user
//@access Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
});
//@desc getUsers
//@route post /api/user
//@access Private
const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    console.log(firstName, lastName, email, password);
    throw new Error("Please add all fields");
  }

  //check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  //hash pbcrypt
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
//@desc getUsers
//@route put /api/user/{id}
//@access Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateUser);
});
//@desc getUsers
//@route delete /api/user/{id}
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  await user.remove();
  res.status(200).json({ message: `delete user ${req.params.id} status` });
});

module.exports = { getUser, createUser, updateUser, deleteUser };

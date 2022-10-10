const asyncHandler = require('express-async-handler');
const { globalAgent } = require('http');
const User = require('../models/userModel')
//@desc getUsers
//@route GET
//@access Private
const getUser = asyncHandler(async(req, res) => {
    const user = await User.find();
    res.status(200).json(user);
})
//@desc getUsers
//@route GET
//@access Private
const createUser = asyncHandler (async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const user = await User.create({
        text: req.body.text
    })
    res.status(200).json(user);
})
//@desc getUsers
//@route GET
//@access Private
const updateUser = asyncHandler (async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400)
        throw new Error('User not found');
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateUser);
})
//@desc getUsers
//@route GET
//@access Private
const deleteUser = asyncHandler (async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }
    await user.remove();
    res.status(200).json({message: `delete user ${req.params.id} status`})
})

module.exports = {getUser, createUser, updateUser, deleteUser,}
const asyncHandler = require('express-async-handler')

//@desc getUsers
//@route GET
//@access Private
const getUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'get users'});
})
//@desc getUsers
//@route GET
//@access Private
const createUser = asyncHandler (async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({setMessage: 'set User'})
})
//@desc getUsers
//@route GET
//@access Private
const updateUser = asyncHandler (async(req, res) => {
    res.status(200).json({message: `update user ${req.params.id} status`})
})
//@desc getUsers
//@route GET
//@access Private
const deleteUser = asyncHandler (async(req, res) => {
    res.status(200).json({message: `delete user ${req.params.id} status`})
})

module.exports = {getUser, createUser, updateUser, deleteUser}
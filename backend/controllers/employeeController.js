const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");


//@desc create employee
//@route POST
//@ACCESS private

const createEmployee = (req, res) => {
    console.log(req.body.text)
    res.json({message: 'employee'})
}

const getEmployees = asyncHandler (async (req, res) => {
    const employee = await Employee.find({user: req.user.id})

    res.status(200).json(employee)
})

const setEmployee = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('employee was not added')
    } 
    const goal = await Employee.create({
        text: req.body.text,
        user: req.user.id,
    })
})
module.exports = {createEmployee,}
const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");

//@desc get employee
//@route get
//@ACCESS private
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({ user: req.user.id });

  res.status(200).json(employees);
});

//@desc setEmployee
//@route POST
//@access private
const setEmployee = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("employee was not added");
  }
  const employee = await Employee.create({
    user: req.user.id,
    name: req.body.name,
    mon: req.body.mon,
    tues: req.body.tues,
    wed: req.body.wed,
    thurs: req.body.thurs,
    fri: req.body.fri,
    sat: req.body.sat,
    sun: req.body.sun,
  });
  res.status(200).json(employee);
});

//@desc update emloyee
//@route put /api/employees/{id}
//@access private
const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400);
    throw new Error("Employee not found");
  }

  //check user
  if (!req.user) {
    res.status(401);
    throw new Error("User was not found");
  }

  //make sure the employees belong to the mangaer
  if (employee.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedEmployee)
});

//@desc delete employee
//@route DELETE /api/employees/{id}
//@access private
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(400);
    throw new Error("Employee not found");
  }
  //check user
  if (!req.user) {
    res.status(401);
    throw new Error("User was not found");
  }

  //make sure the employees belong to the mangaer
  if (employee.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }
  await employee.remove()

  res.status(200).json({id:req.params.id})
});

//req.user.id will grab the user as a json
module.exports = {setEmployee, updateEmployee, deleteEmployee, getEmployees};

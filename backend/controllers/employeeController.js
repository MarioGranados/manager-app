//@desc create employee
//@route POST
//@ACCESS private

const createEmployee = (req, res) => {
    console.log(req.body.text)
    res.json({message: 'employee'})
}
module.exports = {createEmployee,}
const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    employeeName: {
        type: String,
        required: [true, "employee name"],
    },
    employeePosition: {
        type: String,
        required: [true, "employee position"],
    },
    employeePay: {
        type: String,
        required: [true, "employee pay"],
    },
},
{
    timestamps: true,
}
);
module.exports = mongoose.model("Employee", employeeSchema);
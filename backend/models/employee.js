const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    employeeName: {
        type: String,
        required: [true, "employee name"],
    },
},
{
    timestamps: true,
}
)
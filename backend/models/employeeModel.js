const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'please add text']
    },
    mon: {
        type: String,
        required: [true, 'please add text']
    },
    tues: {
        type: String,
        required: [true, 'please add text']
    },
    wed: {
        type: String,
        required: [true, 'please add text']
    },
    thurs: {
        type: String,
        required: [true, 'please add text']
    },
    fri: {
        type: String,
        required: [true, 'please add text']
    },
    sat: {
        type: String,
        required: [true, 'please add text']
    },
    sun: {
        type: String,
        required: [true, 'please add text']
    },

},
{
    timestamps: true,
}
);
module.exports = mongoose.model("Employee", employeeSchema);
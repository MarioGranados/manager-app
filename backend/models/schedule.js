const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: employee,
    },
    
},
{
    timestamps: false,
}
);

module.exports = mongoose.model("Schedule", scheduleSchema)
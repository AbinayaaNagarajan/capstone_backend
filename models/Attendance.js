const mongoose = require ('mongoose');

const attendanceSchema = new mongoose.Schema ({
    name :{
        type : String,
        required : true
    },
    status: {
        type: String,  // present or Absent
        required : true
    },
    date: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required:true
    }

});

const attendance = mongoose.model ('attendance' , attendanceSchema);

module.exports = attendance ;
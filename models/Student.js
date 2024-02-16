const mongoose = require ('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true

  },
  grade :{
    type: Number,
    required: true
  },

  batch: {
    type: Number,
    required: true
  }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

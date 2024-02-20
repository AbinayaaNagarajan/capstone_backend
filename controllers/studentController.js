const Student = require ('../models/Student');

//controller for getting all student details
exports.getAllStudent = async (req , res) =>{

  try {
    const students = await Student.find();
    res.json(students);

  } catch (err){
    res.status(500).json({ error: 'Internal Server Error'});
  }
};

//controller for adding new student 

exports.addStudent = async (req,res) => {

const {name, grade , batch } = req.body;

  try{
    const student = new Student ({
      name,
      grade,
      batch
    });

   await student.save();
   //console.log(student);
    res.json ({success: true, message : 'Student added Successfully', student: student});

  } catch (err) {
    console.log(err);
    res.status(500).json ({error: 'Internal Server Error'});
  }
};

// Controller for remove specific student
exports.deleteStudent = async (req,res) => {
  const studentId = req.params.id ;
  try{
    const deletStudent = await Student.deleteOne({_id:studentId});
    res.json(deletStudent);

  } catch (error) {
    res.status(500).json({error : 'Internal Sever Error'});
  }
};

exports.test = async (req,res) => {
  res.json('Welcome');
}


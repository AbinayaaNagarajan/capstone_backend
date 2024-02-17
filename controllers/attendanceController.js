const Attendance = require ('../models/Attendance');

//controller for saving Attendance

exports.saveAttendance = async (req,res) => {
    const {name, date, month, status} = req.body;

    try{
      console.log(JSON.stringify(req.headers))
        const attendance = new Attendance ({
            name,
            date,
            month,
            status
        });
        await attendance.save();
        res.json(attendance);
        } catch (error){
            console.log(error);
            res.status(500).json({error: ' Internal server error'});
        }
};

exports.editAttendance = async (req, res) => {
    const { name, status } = req.body;
  
    try {
      const updatedAttendance = await Attendance.findOneAndUpdate(
        { name },
        { status },
        { new: true } // If you want to get the updated document, set new to true
      );
  
      if (!updatedAttendance) {
        return res.status(404).json({ success: false, message: 'Attendance not found by name' });
      }
  
      res.json({ success: true, updatedAttendance });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
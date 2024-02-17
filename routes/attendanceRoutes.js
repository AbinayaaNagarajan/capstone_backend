const express = require ('express');
const router = express.Router();
const attendanceController = require ('../controllers/attendanceController');

//Routes for Attendance



router.use((req, res, next) => {
    if (req.headers['auth']==='mypassword') {
    
        return next()
    }
    else{
        res.send(401 ,'Invalid credentials')
    }
  
  })

  
router.post('/saveAttendance', attendanceController.saveAttendance);
router.post('/editAttendance', attendanceController.editAttendance);


module.exports =router;
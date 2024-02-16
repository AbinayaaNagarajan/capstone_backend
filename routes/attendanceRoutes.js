const express = require ('express');
const router = express.Router();
const attendanceController = require ('../controllers/attendanceController');

//Routes for Attendance

router.post('/saveAttendance', attendanceController.saveAttendance);
router.post('/editAttendance', attendanceController.editAttendance);

module.exports =router;
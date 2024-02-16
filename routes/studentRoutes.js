const express = require ('express');
const router = express.Router();
const studentController = require ('../controllers/studentController');

//Routes for Student Details

router.get ('/getAllStudent', studentController.getAllStudent);
router.post('/addStudent', studentController.addStudent);
router.delete('/deleteStudent/:id', studentController.deleteStudent);
router.get('/test',studentController.test);

module.exports = router;
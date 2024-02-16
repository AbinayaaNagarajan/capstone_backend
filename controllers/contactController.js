const Contact = require ('../models/Contact');

//Controller for saving all contacts 

exports.saveContact = async (req,res) =>{
    const {name, email, mobile, message} = req.body;

    try{
        const contact = new Contact({
            name,
            email,
            mobile,
            message,
          });
      
          await contact.save();
          res.json({ success: true, message: 'Contact form data saved successfully' });
        }catch (error){
            console.log(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
};
const User = require('../models/User');

// Controller for user signup
exports.signup = async (req, res) => {
    const { username, password, name, mobileNumber, grade } = req.body;
  
    try {
      const user = new User({ username, password, name, mobileNumber, grade });
      await user.save();
      res.json ({ success: true, message: 'User signed up successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
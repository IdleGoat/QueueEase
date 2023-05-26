const bcrypt = require('bcrypt');
const {pool} = require('../config/config');

let nextAccountId = 2; // Next account ID to be assigned

const generateAccountId = () => {
  const accountId = nextAccountId;
  nextAccountId++;
  return accountId;
};


const usersController = {
    registerUser: async (req, res) => {
      try {
        const { username, password, email, full_name, type_id } = req.body;
        console.log(req.body)
        // Check if the username or email already exists
        const existingUserQuery = 'SELECT * FROM Account WHERE username = $1 OR email = $2';
        const existingUserValues = [username, email];
        const existingUserResult = await pool.query(existingUserQuery, existingUserValues);
  
        if (existingUserResult.rowCount > 0) {
          return res.status(400).json({ message: 'Username or email already exists' });
        }
  
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Generate account ID
        const account_id = generateAccountId();
        
        // Insert the new user into the Account table
        const registerUserQuery =
        ` INSERT INTO Account (account_id, username, password, email, full_name, type_id) 
          VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const registerUserValues = [account_id,username, hashedPassword, email, full_name, type_id];
        await pool.query(registerUserQuery, registerUserValues);
  
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error('Error registering user', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    },
  
  
  };
  
  module.exports = usersController;
const express = require('express');
const db = require('./db');
const cors = require('cors'); // Import module handling database connection

// Create an Express application
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// API endpoint để lấy danh sách các email từ cơ sở dữ liệu
app.get('/api/users/email', (req, res) => {
  db.query('SELECT email FROM users', (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const emails = result.rows.map(row => row.email);
      res.json(emails);
    }
  });
});

// API endpoint to retrieve all information from users and account_role tables
app.get('/api/allInfo', (req, res) => {
  db.query('SELECT * FROM users', (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result.rows);
    }
  });
});

// API endpoint to retrieve account_role for a specific user_id
app.get('/api/accountRole/:user_id', (req, res) => {
  const userId = req.params.user_id;

  db.query('SELECT account.account_role FROM account WHERE account.user_id = $1', [userId], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.rows.length > 0) {
        res.json(result.rows[0].account_role);
      } else {
        res.status(404).json({ message: 'User not found in account table' });
      }
    }
  });
});

app.post('/api/users', (req, res) => {
  const { full_name, user_code, date_of_birth, phone_number, address, email } = req.body;

  // Check if all required fields are provided
  if (!full_name || !user_code || !date_of_birth || !phone_number || !address || !email) {
    return res.status(400).json({ error: 'Please provide all required fields: full_name, user_code, date_of_birth, phone_number, address, email' });
  }

  // Insert new user into the database
  db.query('INSERT INTO users (full_name, user_code, date_of_birth, phone_number, address, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [full_name, user_code, date_of_birth, phone_number, address, email], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json(result.rows[0]); 
    }
  });
});

app.get('/api/transactions', (req, res) => {
  db.query('SELECT * FROM transaction_history', (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result.rows);
    }
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

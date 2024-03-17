const express = require('express');
const { Pool } = require('pg');

// Load environment variables
require('dotenv').config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 4000;

// Configure PostgreSQL connection
const pool = new Pool({
  connectionString: "postgres://admin:Q1wJG4pmcdf4mFuFSazG3Wwrsb0aMhDQ@dpg-cnnuk0djm4es73ce026g-a.singapore-postgres.render.com/smart_tracking_ystem",
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/users/email', (req, res) => {
  pool.query('SELECT email FROM users', (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const emails = result.rows.map(row => row.email);
      res.json(emails);
    }
  });
});

app.get('/auth/google/callback', (req, res) => {
  // Assuming you have received the email from Google OAuth and stored it in req.query.email
  const userEmail = req.query.email; // Sử dụng email mẫu 'test@example.com' nếu không có email từ Google OAuth

  // Check if the email exists in the database
  pool.query('SELECT * FROM users WHERE email = $1', [userEmail], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // If user with this email exists in the database
      if (result.rows.length > 0) {
        res.json({ message: 'User exists in the database' });
      } else {
        res.status(404).json({ message: 'User does not exist in the database' });
      }
    }
  });
});

// Test PostgreSQL connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL');
    console.log('PostgreSQL current timestamp:', res.rows[0].now);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

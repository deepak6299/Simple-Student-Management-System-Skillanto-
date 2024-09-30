const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Create connection to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@123',
    database: 'student_details'
  });
  
  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.log('Database connection failed:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  app.get('/get/students', (req, res) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  });

  // CREATE: Add a new user
app.post('/post/students', (req, res) => {
  const { name, age,classSection } = req.body;
  const query = 'INSERT INTO students (name,age,classSection) VALUES (?, ?,?)';
  db.query(query, [name, age,classSection], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ id: result.insertId, name, age,classSection});
    }
  });
});


// DELETE: Remove a user by ID
app.delete('/delete/students/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM students WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: 'Student deleted', id });
    }
  });
});

// UPDATE: Update a user by ID
app.put('/edit/students/:id', (req, res) => {
  const { id } = req.params;
  const { name, age,classSection } = req.body;
  const query = 'UPDATE students SET name = ?, age = ?,classSection = ? WHERE id = ?';
  db.query(query, [name, age,classSection, id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ id, name, age, classSection });
    }
  });
});

  app.listen(5000)
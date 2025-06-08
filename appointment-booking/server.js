const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle appointment booking
app.post('/book-appointment', (req, res) => {
    console.log('Received appointment request:', req.body);  // Log the incoming data
    const { name, age, date, time } = req.body;

    if (!name || !age || !date || !time) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    // Create an appointment object
    const appointment = { name, age, date, time };

    // Read existing appointments from the JSON file
    fs.readFile('appointments.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return res.status(500).json({ message: 'Server error while reading data' });
        }

        let appointments = [];
        if (data) {
            appointments = JSON.parse(data);
        }

        // Add the new appointment
        appointments.push(appointment);

        // Save the updated appointments list back to the JSON file
        fs.writeFile('appointments.json', JSON.stringify(appointments, null, 2), (err) => {
            if (err) {
                console.log('Error writing to file:', err);
                return res.status(500).json({ message: 'Server error while saving data' });
            }

            console.log('Appointment saved:', appointment);  // Log the saved appointment
            res.json({ message: 'Appointment successfully booked!' });
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

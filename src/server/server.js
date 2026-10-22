require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/profile',     require('../routes/profileRoutes'));
app.use('/api/skills',      require('../routes/skillRoutes'));
app.use('/api/experiences', require('../routes/experienceRoutes'));
app.use('/api/projects',    require('../routes/projectRoutes'));
app.use('/api/contacts',    require('../routes/contactRoutes'));

// Serve Vue.js build (production)
const clientDist = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDist));
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;

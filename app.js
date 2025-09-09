const express = require('express');
const path = require('path');
const environmentRoutes = require('./routes/environmentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// View engine setup (using simple HTML)
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api', environmentRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the application`);
});

module.exports = app;
const express = require('express');
const router = express.Router();
const environmentController = require('../controllers/environmentController');

/**
 * Environment Routes
 * Handles routing for environment variable visualization
 */

// GET /api/environment - Get all environment variables
router.get('/environment', (req, res) => environmentController.getAllEnvironmentVariables(req, res));

// GET /api/version - Get version information
router.get('/version', (req, res) => environmentController.getVersionInfo(req, res));

// GET /api/environment/:key - Get specific environment variable
router.get('/environment/:key', (req, res) => environmentController.getEnvironmentVariable(req, res));

module.exports = router;
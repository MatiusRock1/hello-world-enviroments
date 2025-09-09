/**
 * Environment Controller
 * Handles the visualization of environment variables
 */
class EnvironmentController {
    
    /**
     * Get all environment variables
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    getAllEnvironmentVariables(req, res) {
        try {
            // Filter out sensitive information
            const filteredEnv = this.filterSensitiveData(process.env);
            
            res.json({
                success: true,
                message: 'Environment variables retrieved successfully',
                data: {
                    environmentVariables: filteredEnv,
                    count: Object.keys(filteredEnv).length,
                    nodeVersion: process.version,
                    platform: process.platform,
                    appVersion: process.env.APP_VERSION || 'unknown'
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error retrieving environment variables',
                error: error.message
            });
        }
    }

    /**
     * Get specific environment variable
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    getEnvironmentVariable(req, res) {
        try {
            const { key } = req.params;
            
            if (!key) {
                return res.status(400).json({
                    success: false,
                    message: 'Environment variable key is required'
                });
            }

            const value = process.env[key];
            
            if (value === undefined) {
                return res.status(404).json({
                    success: false,
                    message: `Environment variable '${key}' not found`
                });
            }

            res.json({
                success: true,
                message: 'Environment variable retrieved successfully',
                data: {
                    key: key,
                    value: value
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error retrieving environment variable',
                error: error.message
            });
        }
    }

    /**
     * Get version information
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    getVersionInfo(req, res) {
        try {
            const fs = require('fs');
            let versionData = {
                appVersion: process.env.APP_VERSION || 'unknown',
                nodeVersion: process.version,
                platform: process.platform
            };

            // Try to read version.json file if it exists
            try {
                const versionFile = fs.readFileSync('/app/version.json', 'utf8');
                const fileData = JSON.parse(versionFile);
                versionData = { ...versionData, ...fileData };
            } catch (error) {
                // File doesn't exist or can't be read, continue with env vars
            }

            res.json({
                success: true,
                message: 'Version information retrieved successfully',
                data: versionData
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error retrieving version information',
                error: error.message
            });
        }
    }

    /**
     * Return all environment variables (no filtering for lab environment)
     * @private
     * @param {Object} env - Environment variables object
     * @returns {Object} All environment variables
     */
    filterSensitiveData(env) {
        // For laboratory/educational purposes, return all environment variables without filtering
        return { ...env };
    }

    /**
     * Check if environment variable key is sensitive
     * @private
     * @param {string} key - Environment variable key
     * @returns {boolean} True if sensitive, false otherwise
     */
    isSensitiveKey(key) {
        const sensitivePatterns = [
            /password/i, /secret/i, /key/i, /token/i, 
            /api_key/i, /private/i, /credential/i
        ];

        return sensitivePatterns.some(pattern => pattern.test(key));
    }
}

module.exports = new EnvironmentController();
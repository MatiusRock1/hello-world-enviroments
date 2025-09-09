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
                    platform: process.platform
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

            // Check if the key contains sensitive information
            if (this.isSensitiveKey(key)) {
                return res.status(403).json({
                    success: false,
                    message: 'Access to sensitive environment variable denied'
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
     * Filter out sensitive environment variables
     * @private
     * @param {Object} env - Environment variables object
     * @returns {Object} Filtered environment variables
     */
    filterSensitiveData(env) {
        const filtered = {};
        const sensitiveKeys = [
            'PASSWORD', 'SECRET', 'KEY', 'TOKEN', 'API_KEY', 
            'DB_PASSWORD', 'DATABASE_PASSWORD', 'PRIVATE'
        ];

        for (const [key, value] of Object.entries(env)) {
            if (!this.isSensitiveKey(key)) {
                filtered[key] = value;
            } else {
                filtered[key] = '***HIDDEN***';
            }
        }

        return filtered;
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
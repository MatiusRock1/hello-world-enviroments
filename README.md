# Hello World Environments 🌍

A simple and clean Node.js application that provides a controller to visualize environment variables through a web interface.

## Features

- **Web Interface**: Clean, responsive HTML interface to view environment variables
- **REST API**: RESTful endpoints to access environment data programmatically
- **Security**: Automatically hides sensitive environment variables (passwords, keys, tokens)
- **Search Functionality**: Search for specific environment variables
- **System Information**: Displays Node.js version, platform, and environment variable count

## Getting Started

### Prerequisites

- Node.js 14.0.0 or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MatiusRock1/hello-world-enviroments.git
   cd hello-world-enviroments
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and visit: http://localhost:3000

## API Endpoints

### Get All Environment Variables
```
GET /api/environment
```

Returns all environment variables with sensitive data hidden.

**Response:**
```json
{
  "success": true,
  "message": "Environment variables retrieved successfully",
  "data": {
    "environmentVariables": { ... },
    "count": 178,
    "nodeVersion": "v20.19.5",
    "platform": "linux"
  }
}
```

### Get Specific Environment Variable
```
GET /api/environment/:key
```

Returns a specific environment variable by key.

**Example:**
```bash
curl http://localhost:3000/api/environment/HOME
```

**Response:**
```json
{
  "success": true,
  "message": "Environment variable retrieved successfully",
  "data": {
    "key": "HOME",
    "value": "/home/runner"
  }
}
```

## Project Structure

```
├── app.js                     # Main application entry point
├── controllers/
│   └── environmentController.js  # Controller for environment operations
├── routes/
│   └── environmentRoutes.js      # API routes definition
├── views/
│   └── index.html                 # Web interface
├── package.json                   # Project configuration
└── README.md                      # Project documentation
```

## Architecture

This project follows a simple MVC-like architecture:

- **app.js**: Main Express server setup and configuration
- **controllers/**: Business logic for handling environment variable operations
- **routes/**: Route definitions and middleware
- **views/**: Static HTML interface

## Security Features

The application automatically protects sensitive information by:

- Hiding environment variables containing: password, secret, key, token, api_key, private, credential
- Returning `***HIDDEN***` for sensitive values in the API
- Denying access to sensitive variables in single-variable requests

## Development

To run in development mode:

```bash
npm run dev
```

## Contributing

This project maintains a clean, simple architecture suitable for semi-senior developers. When contributing:

- Keep the codebase simple and readable
- Follow existing patterns and conventions
- Add appropriate error handling
- Maintain security practices

## License

ISC
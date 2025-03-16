// Import the Express framework
const express = require('express');
// Create an instance of the Express application
const app = express();
// Define the port number on which the server will listen
const port = 3000;
/**
 * Route: GET /
 * Description: Handles requests to the root URL ("/").
 * Response: Sends an HTML response with a welcome message.
 */
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Anixs Node.js Web Server</h1>');
});
/**
 * Starts the server and listens on the specified port.
 * Logs a message to the console when the server is running.
 */
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

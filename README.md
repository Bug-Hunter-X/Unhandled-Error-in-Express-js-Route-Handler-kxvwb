# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers:  failure to handle invalid or missing data from requests.

The `bug.js` file contains the erroneous code.  It attempts to access user data using `req.params.id` directly without validating that the user exists.

The `bugSolution.js` file provides a corrected version with proper error handling, illustrating how to prevent unexpected runtime errors.
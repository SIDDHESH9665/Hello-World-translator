# Hello World API Project

## Overview
This project consists of a simple Node.js Express server that serves a "Hello World" message in different languages. It also includes a frontend HTML page for users to select a language and display the corresponding message.

## Project Structure
- **Server Code (`app.js`)**: An Express server that handles GET requests to return the "Hello World" message in different languages.
- **Frontend Code (`index.html`)**: A simple HTML/CSS/JavaScript page that interacts with the backend to display the messages based on user selection.
- **OpenAPI Specification (`api-doc.yml`)**: A YAML file that documents the API using the OpenAPI 3.0 specification.

## Server Code
### `app.js`
```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/hello', (req, res) => {
  const language = (req.query.language || '').toLowerCase();
  let message;

  switch (language) {
    case 'english':
      message = 'Hello World';
      break;
    case 'french':
      message = 'Bonjour le monde';
      break;
    case 'hindi':
      message = 'Namastey sansar';
      break;
    default:
      res.status(400).json({ error_message: 'The requested language is not supported' });
      return;
  }

  res.status(200).send(message);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

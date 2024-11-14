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
      res.status(400).send('The requested language is not supported');
      return;
  }

  res.status(200).send(message);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Only start server if run directly (not when required in tests)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });
}

module.exports = app;

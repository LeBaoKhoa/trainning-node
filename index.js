const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Node API!');
});

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

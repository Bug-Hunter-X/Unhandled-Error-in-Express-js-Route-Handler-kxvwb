const express = require('express');
const app = express();
const users = {
  "1": { name: "John Doe" },
  "2": { name: "Jane Smith" }
};
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (!users[userId]) {
    return res.status(404).send('User not found');
  }
  res.send(`User ${userId}: ${users[userId].name}`);
});
app.listen(3000, () => console.log('Server listening on port 3000'));
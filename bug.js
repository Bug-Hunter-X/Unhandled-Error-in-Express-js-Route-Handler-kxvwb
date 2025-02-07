const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  console.log(users[userId]); //Potentially throws error if userId is invalid
  res.send(`User ${userId}`);
});
app.listen(3000, () => console.log('Server listening on port 3000'));
const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

const users = [{
  id: '1', name: 'olha', book: null
}];
app.use(bodyparser.json());

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/assignBookToUser', async (req, res) => {
  const response = await axios.get(`http://localhost:3001/getOneBook/${req.body.bookId}`)
  users.map(el => {
    if (el.id === req.body.userId) {
      el.book = response.data
    }
    return el;
  })
  const currentUser = users.find(el => el.id === req.body.userId);

  res.send({ ...currentUser, book: response.data });
});

app.post('/addUser', (req, res) => {
  users.push(req.body.userData);
  res.send(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

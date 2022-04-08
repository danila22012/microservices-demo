const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3001;

const books = [{ id: '1', title: 'Test Book' }];
app.use(bodyparser.json());

app.get('/getBooks', (req, res) => {
  res.send(books);
});
app.get('/getOneBook/:id', (req, res) => {
  res.send(books.find(el => el.id === req.params.id));
});
app.post('/addNewbook', (req, res) => {
  books.push(req.body.book);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

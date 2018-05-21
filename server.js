'use strict';


const express = require('express');

const data = require('./db/notes');

const app = express();



app.use(express.static('public'));



// app.get('/api/notes', (req, res) => {
//   res.json(data);
// });

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const list = data.find(item=> item.id === Number(id));
  res.json(list);
});

app.get('/api/notes',(req, res) => {
  const searchTerm=  req.query.searchTerm;
  const list = data.filter(function(item){
    return item.title.includes(searchTerm);
  });
  res.json(list);
});


app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});
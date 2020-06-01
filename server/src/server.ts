import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Aloisio',
    'Érica',
    'Ana'
  ]);
});

app.listen(3333);
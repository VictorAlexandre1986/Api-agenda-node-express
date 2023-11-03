const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

const { createCompromisso, 
        getCompromissos, 
        getCompromissoById, 
        deleteCompromisso, 
        updateCompromisso } = require('./controllers/compromissoController');

app.use(bodyParser.json());

app.post('/compromisso', createCompromisso);
app.get('/compromisso', getCompromissos);
app.get('/compromisso/:id', getCompromissoById);
app.put('/compromisso/:id', updateCompromisso);
app.delete('/compromisso/:id', deleteCompromisso);



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
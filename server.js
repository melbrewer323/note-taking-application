const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;




app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes/routes')(app);
app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`);
});




app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));


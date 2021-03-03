const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoURI = require("./keys.js").mongoURI
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());

app.listen(port, () => {
    console.log('Server is running on ' + port + 'port');
});

app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

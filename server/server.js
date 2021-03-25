const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoURI = require("./konfig/keys.js").mongoURI
const app = express();
const passport = require('passport');
const { jwtStrategy } = require('./konfig/passport');


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

app.use('/recipes', require('./routes/recipes'));
app.use('/users', require('./routes/users'));

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);


mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

const express = require('express');
const UserSchema = require('..model/model/userModel');
const router = express.Router();


router.post('/register', (req, res) => {
    const reqemail = req.body.email;
    const password = req.body.password;
    UserSchema.findOne({ email: reqemail, (err, user)=> {
        if(user) {
            res.send({ msg: 'user exist' });
        } else {
            bcryprt.hash(reqpassword, salt, function (err, hash) {

            })
            const newUser = new UserSchema({ email: reqemail, password: reqpassword });
            newUser
            .save
                .then((user) => {
                    res.send(err);
                });
        }


    }
    }
    
    }
}
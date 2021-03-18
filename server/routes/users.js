const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../model/usersModel");
const router = express.Router();



router.post("/register", (req, res) => {
    const reqemail = req.body.email;
    const reqpassword = req.body.password;

    UserSchema.findOne({ email: reqemail }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            res.send({ msg: "user exists" });
        } else {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(reqpassword, salt, function (err, hash) {
                    if (err) {
                        res.send(err);
                    } else {
                        const newUser = new UserSchema({ email: reqemail, password: hash });
                        newUser
                            .save()
                            .then((user) => {
                                res.send(user);
                            })
                            .catch((err) => {
                                res.send(err);
                            });
                    }
                });
            });
        }
    });
});


router.post("/login", (req, res) => {
    const reqemail = req.body.email;
    const reqpassword = req.body.password;

    UserSchema.findOne({ email: reqemail }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            // Load hash from your password DB.
            bcrypt.compare(reqpassword, user.password, function (err, result) {
                if (result == true) {
                    res.status(200).send({ user: user, success: true })
                }
                else {

                    res.status(403).send({ message: 'wrong password', success: false })
                }

                // result == true
            });

        }
        else {
            res.status(403).send({ messege: "user doesn't exist", success: false })

        }


    });
});



module.exports = router;


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const UserSchema = require("../model/usersModel");
const router = express.Router();
const keys = require("../konfig/keys");
const passport = require('passport')
const recipeSchema = require('../model/recipesModel')

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
                                res.send({ user: user, success: true });
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
                    // res.status(200).json({ user })

                    //create JWT payload
                    const payload = {
                        id: user.id,
                        email: user.email
                    };
                    //sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        // {
                        //     expiresIn: 2592000
                        // },
                        (err, token) => {
                            if (err) { res.send(err) }

                            res.status(200).json({
                                success: true,
                                token: token,
                                user
                            });
                        }
                    );
                }
                else {

                    res.status(403).send({ message: 'wrong password', success: false })
                }


            });

        }
        else {
            res.status(403).send({ messege: "user doesn't exist", success: false })

        }


    });
});

router.get("/token", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log(req.user)
    res.send(req.user)



})

router.patch("/like", passport.authenticate("jwt", { session: false }), (req, res) => {
    recipeSchema.findById(req.body.recipeId, (err, recipe) => {
        recipe.likes.push(req.user._id)
        recipe.save()
        req.user.likedRecipes.push(req.body.recipeId)
        req.user.save()
        res.send(req.user)
    })


    // add favourite and recieve in the request body



})


module.exports = router;

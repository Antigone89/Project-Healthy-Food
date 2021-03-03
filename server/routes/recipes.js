const express = require("express");
const JobSchema = require('../model/jobsModel')
const router = express.Router();

router.get("/recipes", (req, res) => {
    RecipesSchema.find({}, (err, recipes) => {
        if (err) {
            console.log('error :>> ', error);
        } else {
            console.log('recipes :>> ', recipes);
            res.send(jobs);
        }
    });

});

router.post('/new', (req, res) => {

})

module.exports = router;

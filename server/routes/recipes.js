const express = require("express");
const { findById } = require("../model/recipesModel");
const RecipesSchema = require('../model/recipesModel')
const router = express.Router();
/*
router.get('/', (req, res) => {
    res.send('Hello World!')
}) */

router.get("/all", (req, res) => {
    RecipesSchema.find({}, (err, recipes) => {
        if (err) {
            console.log('error :>> ', error);
        } else {
            console.log('recipes :>> ', recipes);
            res.send(recipes);

        }
    });

});

router.post('/new', (req, res) => {
    const title = req.body.title;
    const duration = req.body.duration;
    const carbohydrates = req.body.carbohydrates;
    const proteins = req.body.proteins;
    const fat = req.body.fat;
    const newRecipe = RecipesSchema({
        duration: duration,
        title: title,
        carbohydrates: carbohydrates,
        proteins: proteins,
        fat: fat,
    })
    newRecipe.save()
        .then(recipe => {
            console.log(recipe)
            res.send(recipe)
        }).catch(err => {
            console.log(err)
            res.send(err)
        })


})



router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)

    RecipesSchema.findById(id, (err, recipe) => {
        if (err) {
            console.log('error :>> ', err);
            res.send(err)
        } else {
            console.log('recipe :>> ', recipe);
            res.send(recipe);

        }
    })
}


)

module.exports = router;
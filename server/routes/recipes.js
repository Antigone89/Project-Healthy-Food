const express = require("express");
const { findById } = require("../model/recipesModel");
const RecipesSchema = require('../model/recipesModel')
const router = express.Router();
const passport = require('passport')



router.get("/all",
    //  auth,
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        RecipesSchema.find({}, (err, recipes) => {
            if (err) {
                console.log('error :>> ', error);
            } else {
                console.log('recipes :>> ', recipes);
                res.send(recipes);

            }
        });

    });
router.post("/search",
    //passport.authenticate("jwt", { session: false }),
    (req, res) => {
        console.log('req.body', req.body)
        const input = req.body.searchInput.toLowerCase()
        if (input === "") { res.send({ success: false, msg: "Type something u stupid" }) }
        else {
            RecipesSchema.find({}, (err, recipes) => {
                if (err) {
                    console.log('error :>> ', err);
                } else {
                    console.log('recipes :>> ', recipes);

                    const filteredRecipes = recipes.filter(recipe => {
                        return recipe.title.toLowerCase().includes(input)
                            ||
                            recipe.ingredients.includes(input)
                    })
                    // const filteredIngredients = recipes.filter(recipe => {
                    //     return recipe.ingredients.length ? recipe.ingredients.filter(ingredient => {
                    //         ingredient.toLowerCase().includes(input)
                    //     }) : false

                    // })
                    if (filteredRecipes.length > 0) {
                        res.send({ success: true, data: filteredRecipes })

                    }
                    else {
                        res.send({ success: false, msg: "No Recipe found" })
                    }

                }
            });
        }
    });



router.post('/new', (req, res) => {
    const title = req.body.title;
    const duration = req.body.duration;
    const ingredients = req.body.ingredients;
    const description = req.body.description;


    /*const carbohydrates = req.body.carbohydrates;
    const proteins = req.body.proteins;
    const fat = req.body.fat;*/
    const newRecipe = RecipesSchema({

        title: title,
        duration: duration,
        ingredients: ingredients,
        description: description,


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
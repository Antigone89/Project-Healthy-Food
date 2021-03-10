const mongoose = require("mongoose")


const RecipesSchema = new mongoose.Schema({
    ingredients: Array,
    duration: Number,
    title: { type: String, required: true },
} /*what to write since the data type is not only string*/,
);

module.exports = mongoose.model("recipe", RecipesSchema);


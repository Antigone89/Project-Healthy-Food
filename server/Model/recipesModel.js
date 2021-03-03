const mongoose = require("mongoose")


const recipesSchema = new mongoose.Schema({
    description: String,
    location: String,
    salary: Number,
    title: { type: String, required: true },
} /*what to write since the data type is not only string*/,
);

module.exports = mongoose.model("recipe", RecipeSchema);

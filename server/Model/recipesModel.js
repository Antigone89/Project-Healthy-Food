const mongoose = require("mongoose")



const RecipesSchema = new mongoose.Schema({
    ingredients: Array,
    duration: Number,
    carbohydrates: Number,
    proteins: Number,
    fat: Number,
    title: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
} /*what to write since the data type is not only string*/
);

module.exports = mongoose.model("recipe", RecipesSchema);


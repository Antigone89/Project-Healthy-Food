const mongoose = require("mongoose")



const RecipesSchema = new mongoose.Schema({
    ingredients: Array,
    duration: Number,
    description: String,
    carbohydrates: Number,
    proteins: Number,
    fat: Number,
    title: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    comments: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        text: String,
        date: Date,
    }],

} /*what to write since the data type is not only string*/
);

//   db.collection.insert(
// <document or array of documents>,
//    {
// writeConcern: <document>,
//  ordered: <boolean>
// }
// )

module.exports = mongoose.model("recipe", RecipesSchema);


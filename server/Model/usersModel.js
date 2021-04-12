const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: String,
    password: String,
    likedRecipes: [{ type: Schema.Types.ObjectId, ref: 'recipe' }]

}
);

module.exports = mongoose.model("user", UserSchema);
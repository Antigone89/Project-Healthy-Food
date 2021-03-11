const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    password: String,

} /*what to write since the data type is not only string*/,
);

module.exports = mongoose.model("user", UserSchema);
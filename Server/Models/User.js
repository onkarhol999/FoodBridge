const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name : String,
    address: String,
    pincode: String,
    landmark: String,
    contact: String,
    quantity: Number,
    description: String,
});

module.exports = mongoose.model("User", usersSchema); // Changed model name to "User"
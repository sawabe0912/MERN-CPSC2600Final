const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tshirt = new Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true }
});

module.exports = mongoose.model("tshirts", Tshirt);

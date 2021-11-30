const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Website = new Schema({
	comment: { type: String, required: true }
});

module.exports = mongoose.model("websites", Website);

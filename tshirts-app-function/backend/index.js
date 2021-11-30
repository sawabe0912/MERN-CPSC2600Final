const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tshirtRouter = require("./routes/tshirt-router");
const websiteRouter = require("./routes/website-router");
const app = express();
const apiPort = 3000;
var compression = require("compression");
var helmet = require("helmet");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.use(helmet());
var mongoose = require("mongoose");

var dev_db_url =
	"mongodb+srv://rionsawabe:sasasaGK1@cpsc2600.emc8c.mongodb.net/projectCpsc?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
	res.send("Backend correctly working!");
});

app.use("/api", tshirtRouter);
app.use("/api", websiteRouter);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

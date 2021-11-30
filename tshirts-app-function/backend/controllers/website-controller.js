const Website = require("../models/website-model");

createWebsite = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "need a body!!"
		});
	}

	const website = new Website(body);

	if (!website) {
		return res.status(400).json({ success: false, error: err });
	}

	website
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: website._id,
				message: "Website was created!"
			});
		})
		.catch((error) => {
			return res.status(400).json({
				error,
				message: "Website is not created!"
			});
		});
};

module.exports = {
	createWebsite
};

const Tshirt = require("../models/tshirt-model");

createTshirt = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "need a t-shirt!!",
		});
	}

	const tshirt = new Tshirt(body);

	if (!tshirt) {
		return res.status(400).json({ success: false, error: err });
	}

	tshirt
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: tshirt._id,
				message: "Tshirt was created!",
			});
		})
		.catch((error) => {
			return res.status(400).json({
				error,
				message: "Tshirt is not created!",
			});
		});
};

updateTshirt = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "Provide body to update",
		});
	}

	Tshirt.findOne({ _id: req.params.id }, (err, tshirt) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "Tshirt not found!",
			});
		}
		tshirt.name = body.name;
		tshirt.rating = body.rating;
		tshirt
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: tshirt._id,
					message: "Tshirt updated!",
				});
			})
			.catch((error) => {
				return res.status(404).json({
					error,
					message: "Tshirt not updated!",
				});
			});
	});
};

deleteTshirt = async (req, res) => {
	await Tshirt.findOneAndDelete({ _id: req.params.id }, (err, tshirt) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!tshirt) {
			return res
				.status(404)
				.json({ success: false, error: "Tshirt not found" });
		}

		return res.status(200).json({ success: true, data: tshirt });
	})
		.clone()
		.catch((err) => console.log(err));
};

getTshirtById = async (req, res) => {
	await Tshirt.findOne({ _id: req.params.id }, (err, tshirt) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		return res.status(200).json({ success: true, data: tshirt });
	})
		.clone()
		.catch((err) => console.log(err));
};

getTshirts = async (req, res) => {
	await Tshirt.find({}, (err, tshirts) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!tshirts.length) {
			return res
				.status(404)
				.json({ success: false, error: "Tshirt not found" });
		}
		return res.status(200).json({ success: true, data: tshirts });
	})
		.clone()
		.catch((err) => console.log(err));
};

module.exports = {
	createTshirt,
	updateTshirt,
	deleteTshirt,
	getTshirts,
	getTshirtById,
};

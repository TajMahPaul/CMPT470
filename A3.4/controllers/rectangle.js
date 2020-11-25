const { models } = require('../models');

async function getAll(req, res) {
	const rectangles = await models.rectangle.findAll();
	res.status(200).json(rectangles);
};

async function getById(req, res) {
	const id = req.params.id;
	const rectangle = await models.rectangle.findByPk(id);
	if (rectangle) {
		res.status(200).json(rectangle);
	} else {
		res.status(404).send("404 - Not found");
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send("Bad request")
	} else {
		await models.rectangle.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = req.params.id;
    
    await models.rectangle.update(req.body, {where: {id: id}});
	res.status(200).end();
};

async function remove(req, res) {
    const id = req.params.id;
    
	await models.rectangle.destroy({where: {id: id}});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};
const Property = require('../models/property');

exports.getProperties = async (req, res) => {
  const { page = 1, limit = 6, sortBy = 'createdAt', order = 'desc' } = req.query;
  const sort = { [sortBy]: order === 'asc' ? 1 : -1 };
  const properties = await Property.find().sort(sort).skip((page - 1) * limit).limit(Number(limit));
  res.json(properties);
};

exports.getProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);
  property.views += 1;
  await property.save();
  res.json(property);
};

exports.addProperty = async (req, res) => {
  const property = await Property.create(req.body);
  res.status(201).json(property);
};

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  ownerName: String,
  contactNumber: String,
  alternateContact: String,
  locality: String,
  address: String,
  spaceType: String,
  petsAllowed: Boolean,
  preference: String,
  bachelors: String,
  type: String,
  bhk: Number,
  floor: Number,
  landmark: String,
  washroom: String,
  cooling: String,
  carParking: Boolean,
  rent: Number,
  maintenance: Number,
  squareFeet: Number,
  appliances: [String],
  amenities: [String],
  about: String,
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('Property', propertySchema);

const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  location: { type: String }
});

module.exports = mongoose.model('Stock', stockSchema);

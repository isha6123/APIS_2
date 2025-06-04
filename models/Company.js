const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String
});

module.exports = mongoose.model('Company', companySchema);

const mongoose = require('mongoose');

var pilotSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  instrument: { type: String },
  actor: { type: String }
});

module.exports = mongoose.model('PF', pfSchema);

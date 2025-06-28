const mongoose = require('mongoose');

const okrSchema = new mongoose.Schema({
  title: { type: String, required: true },
  progress: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('OKR', okrSchema);

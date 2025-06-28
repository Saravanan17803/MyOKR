const OKR = require('../models/OKR');

exports.getAllOKRs = async (req, res) => {
  const okrs = await OKR.find();
  res.json(okrs);
};

exports.createOKR = async (req, res) => {
  const okr = new OKR(req.body);
  await okr.save();
  res.status(201).json(okr);
};

exports.updateOKR = async (req, res) => {
  const { id } = req.params;
  const { progress } = req.body;
  await OKR.findByIdAndUpdate(id, { progress });
  res.sendStatus(200);
};

exports.deleteOKR = async (req, res) => {
  const { id } = req.params;
  await OKR.findByIdAndDelete(id);
  res.sendStatus(200);
};

import Unit from '../models/Unit.js';

export const createUnit = async (req, res) => {
  try {
    const unit = await Unit.create({ name: req.body.name });
    res.status(201).json(unit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUnits = async (req, res) => {
  try {
    const units = await Unit.find();
    res.json(units);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

import Stock from '../models/Stock.js';

export const createStock = async (req, res) => {
  try {
    const stock = await Stock.create({ quantity: req.body.quantity });
    res.status(201).json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

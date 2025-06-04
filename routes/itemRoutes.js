const express = require('express');
const router = express.Router();
const multer = require('multer');
const Item = require('../models/Item');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Create Item
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const item = new Item({
      name: req.body.name,
      image: req.file?.filename,
      category: req.body.category,
      stock: req.body.stock,
      unit: req.body.unit,
      company: req.body.company
    });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find()
      .populate('category')
      .populate('stock')
      .populate('unit')
      .populate('company');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

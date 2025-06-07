import express from 'express';
import {
  createStock,
  getAllStocks
} from '../controllers/stockController.js';

const router = express.Router();

router.post('/', createStock);
router.get('/', getAllStocks);

export default router;

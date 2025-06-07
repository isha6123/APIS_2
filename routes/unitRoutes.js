import express from 'express';
import {
  createUnit,
  getAllUnits
} from '../controllers/unitController.js';

const router = express.Router();

router.post('/', createUnit);
router.get('/', getAllUnits);

export default router;


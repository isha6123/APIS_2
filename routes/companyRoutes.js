// routes/companyRoutes.js
import express from 'express';
import { createCompany, getAllCompanies } from '../controllers/companyController.js';

const router = express.Router();

router.post('/', createCompany);
router.get('/', getAllCompanies);

export default router;

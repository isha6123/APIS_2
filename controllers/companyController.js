// controllers/companyController.js
import Company from '../models/Company.js';

export const createCompany = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Company name is required' });
    }

    const newCompany = new Company({ name });
    await newCompany.save();

    res.status(201).json({ message: 'Company created successfully', company: newCompany });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

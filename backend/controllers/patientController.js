const Patient = require("../models/Patient");

// Add Patient
const addPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addPatient,
  getPatients,
};
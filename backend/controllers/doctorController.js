const Doctor = require("../models/Doctor");

// Add Doctor
const addDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addDoctor,
  getDoctors,
};
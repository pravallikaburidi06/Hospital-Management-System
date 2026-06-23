const express = require("express");

const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

router.post("/", bookAppointment);

router.get("/", getAppointments);

router.put("/:id", updateAppointmentStatus);

module.exports = router;
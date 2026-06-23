const API = "http://localhost:5000/api/appointments";

const appointmentForm =
  document.getElementById("appointmentForm");

const appointmentList =
  document.getElementById("appointmentList");

// Book Appointment
if (appointmentForm) {
  appointmentForm.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();

      const appointment = {
        patientName:
          document.getElementById("patientName").value,

        doctorName:
          document.getElementById("doctorName").value,

        appointmentDate:
          document.getElementById("appointmentDate").value,

        appointmentTime:
          document.getElementById("appointmentTime").value,
      };

      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });

      alert("Appointment Booked");

      appointmentForm.reset();

      loadAppointments();
    }
  );
}

// Load Appointments
async function loadAppointments() {
  if (!appointmentList) return;

  const response = await fetch(API);

  const appointments = await response.json();

  appointmentList.innerHTML = "";

  appointments.forEach((appointment) => {
    appointmentList.innerHTML += `
      <div class="card">
        <h3>${appointment.patientName}</h3>

        <p>Doctor: ${appointment.doctorName}</p>

        <p>Date: ${appointment.appointmentDate}</p>

        <p>Time: ${appointment.appointmentTime}</p>

        <p>Status: ${appointment.status}</p>
      </div>
    `;
  });
}

loadAppointments();
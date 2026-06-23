const API = "http://localhost:5000/api/doctors";

const doctorForm = document.getElementById("doctorForm");
const doctorList = document.getElementById("doctorList");

// Add Doctor
if (doctorForm) {
  doctorForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const doctor = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      specialization: document.getElementById("specialization").value,
      experience: document.getElementById("experience").value,
    };

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    });

    alert("Doctor Added Successfully");
    doctorForm.reset();

    loadDoctors();
  });
}

// Load Doctors
async function loadDoctors() {
  if (!doctorList) return;

  const response = await fetch(API);
  const doctors = await response.json();

  doctorList.innerHTML = "";

  doctors.forEach((doctor) => {
    doctorList.innerHTML += `
      <div class="card">
        <h3>${doctor.name}</h3>
        <p>Email: ${doctor.email}</p>
        <p>Phone: ${doctor.phone}</p>
        <p>Specialization: ${doctor.specialization}</p>
        <p>Experience: ${doctor.experience} Years</p>
      </div>
    `;
  });
}

loadDoctors();
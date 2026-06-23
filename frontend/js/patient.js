const API = "http://localhost:5000/api/patients";

const patientForm = document.getElementById("patientForm");
const patientList = document.getElementById("patientList");

// Add Patient
if (patientForm) {
  patientForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const patient = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
    };

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    });

    alert("Patient Added Successfully");
    patientForm.reset();

    loadPatients();
  });
}

// Load Patients
async function loadPatients() {
  if (!patientList) return;

  const response = await fetch(API);
  const patients = await response.json();

  patientList.innerHTML = "";

  patients.forEach((patient) => {
    patientList.innerHTML += `
      <div class="card">
        <h3>${patient.name}</h3>
        <p>Age: ${patient.age}</p>
        <p>Gender: ${patient.gender}</p>
        <p>Phone: ${patient.phone}</p>
        <p>Address: ${patient.address}</p>
      </div>
    `;
  });
}

loadPatients();
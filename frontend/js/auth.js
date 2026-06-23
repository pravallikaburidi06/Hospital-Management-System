const API =
"http://localhost:5000/api/auth";

// Register

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const data = {
name:name.value,
email:email.value,
password:password.value,
role:role.value
};

await fetch(
`${API}/register`,
{
method:"POST",
headers:{
"Content-Type":
"application/json"
},
body:JSON.stringify(data)
}
);

alert("Registered");

window.location =
"login.html";
});
}

// Login

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const response =
await fetch(
`${API}/login`,
{
method:"POST",
headers:{
"Content-Type":
"application/json"
},
body:JSON.stringify({
email:email.value,
password:password.value
})
}
);

const result =
await response.json();

localStorage.setItem(
"token",
result.token
);

window.location =
"dashboard.html";

});
}
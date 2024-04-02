document.getElementById("loginBtn").addEventListener("click", function() {
  window.location.href = "login.html";
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  // Check if password meets minimum length requirement
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  let user = { email: email, password: password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration successful. Please login.");
  window.location.href = "login.html";
});
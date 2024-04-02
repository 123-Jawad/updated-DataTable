document.getElementById("registerBtn").addEventListener("click", function() {
  window.location.href = "register.html";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      alert("Login successful.");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
  
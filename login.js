
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      swal({
        title: "Login Successfully!",
        text: "You are redirected to main page!",
        icon: "success",
        timer: 2000, // Display the message for 2 seconds
        buttons: false // Hide the "Close" button
      }).then(() => {
        window.location.href = "index.html";
      });
    } else {
      swal("Error!", "Wrong Credential!", "error");
    }
  });
  
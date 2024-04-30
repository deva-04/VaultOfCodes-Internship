document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return; 
    }
    
    alert("Form submitted successfully!");
    // document.getElementById("registrationForm").reset();

  });
  
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function() {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Validate email format
    if(email === "secret@gmail.com" && password === "secret") {
        window.location.href = "dashboard.html"
    }
})
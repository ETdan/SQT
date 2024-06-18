document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var formData = new FormData(signupForm);
        var email = formData.get('email');
        var username = formData.get('username');
        var password = formData.get('password');

        if (localStorage.getItem(email)) {
            alert('User already exists! Please sign in.');
            return;
        }

        var userData = {
            username: username,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        
        alert('Signup successful! Please sign in.');
       
        signupForm.reset();
    });
});

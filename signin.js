document.addEventListener('DOMContentLoaded', function() {
    var signinForm = document.getElementById('signinForm');

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = signinForm.elements['email'].value;
        var password = signinForm.elements['password'].value;

        var userData = JSON.parse(localStorage.getItem(email));

        if (userData && userData.password === password) {
            alert('Signin successful!');
            signinForm.reset();
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    });
});

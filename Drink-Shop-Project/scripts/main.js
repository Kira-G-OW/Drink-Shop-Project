$(document).ready(function () {
    // Sign Up Form
    $('#signupForm').submit(function (event) {
        event.preventDefault();

        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const password = $('#password').val();
            const confirmPassword = $('#confirmPassword').val();

            if (password !== confirmPassword) {
                $('#confirmPassword').get(0).setCustomValidity("Passwords do not match.");
                event.stopPropagation();
            } else {
                $('#confirmPassword').get(0).setCustomValidity('');
                window.location.href = 'pages/browse.html';
            }
        }

        $(this).addClass('was-validated');
    });
});

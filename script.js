 $(document).ready(function () {
    // Burger menu toggle
    $('.burger').on('click', function () {
        $('.nav-links').toggleClass('nav-active');
        $('.line1').toggleClass('line1-active');
        $('.line2').toggleClass('line2-active');
        $('.line3').toggleClass('line3-active');
    });

    // Form submission with AJAX
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        // Disable inputs and button
        $('input, textarea, button').prop('disabled', true);

        // Example AJAX call
        $.ajax({
            url: 'your-server-endpoint', // Replace with your server endpoint
            method: 'POST',
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            success: function (response) {
                // Enable inputs and button after success
                $('input, textarea, button').prop('disabled', false);
                alert('Form submitted successfully!');
            },
            error: function (error) {
                // Enable inputs and button if there's an error
                $('input, textarea, button').prop('disabled', false);
                alert('An error occurred. Please try again.');
            }
        });
    });
});

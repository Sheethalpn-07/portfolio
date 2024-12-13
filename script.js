$(document).ready(function () {
    // Smooth scrolling to sections
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    // Form submission
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        // Simulate sending a message (no backend here)
        $('#success-message').fadeIn().delay(3000).fadeOut();
    });
});

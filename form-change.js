document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const teamFeatureInput = document.getElementById('team-feature');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Capture input values
        const email = emailInput.value;
        const teamFeature = teamFeatureInput.value;

        // Simple validation (optional)
        if (email === '' || teamFeature === '') {
            alert('모든 필드를 입력하세요.');
            return;
        }

        // Display confirmation message
        confirmationMessage.style.display = 'block';

        // Clear input fields
        emailInput.value = '';
        teamFeatureInput.value = '';
    });
});



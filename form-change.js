document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const teamFeatureInput = document.getElementById('team-feature');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();


        const email = emailInput.value;
        const teamFeature = teamFeatureInput.value;


        if (email === '' || teamFeature === '') {
            alert('모든 필드를 입력하세요.');
            return;
        }


        confirmationMessage.style.display = 'block';

 
        emailInput.value = '';
        teamFeatureInput.value = '';
    });
});



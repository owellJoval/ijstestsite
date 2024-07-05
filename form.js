document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const riskProfileModal = document.getElementById('risk-profile-modal');
    const closeButton = document.querySelector('.close-button');
    const riskProfileForm = document.getElementById('risk-profile-form');
    const riskProfileResult = document.getElementById('risk-profile-result');

    startButton.addEventListener('click', function () {
        riskProfileModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        riskProfileModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === riskProfileModal) {
            riskProfileModal.style.display = 'none';
        }
    });

    document.getElementById('submit-risk-profile').addEventListener('click', function () {
        const formData = new FormData(riskProfileForm);
        let score = 0;

        formData.forEach((value, key) => {
            score += parseInt(value);
        });

        let riskProfile = '';
        if (score <= 6) {
            riskProfile = 'Conservative';
        } else if (score <= 12) {
            riskProfile = 'Moderate';
        } else {
            riskProfile = 'Aggressive';
        }

        riskProfileResult.textContent = `Results: ${riskProfile}`;
        riskProfileResult.style.display = 'block';
        startButton.style.display = 'none';
        riskProfileModal.style.display = 'none';
    });
});

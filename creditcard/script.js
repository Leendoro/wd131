document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('card-holder');
    const expirationDateInput = document.getElementById('expiration-date');
    const cvvInput = document.getElementById('cvv');
    const form = document.querySelector('.credit-card-form');

    // Card number input formatting
    cardNumberInput.addEventListener('input', function() {
        let value = cardNumberInput.value.replace(/\D/g, '');
        value = value.match(/.{1,4}/g);
        cardNumberInput.value = value ? value.join(' ') : '';
    });

    // Expiration date input formatting
    expirationDateInput.addEventListener('input', function() {
        let value = expirationDateInput.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        expirationDateInput.value = value;
    });

    // Form submission validation
    form.addEventListener('submit', function(e) {
        // let valid = true;
        e.preventDefault();


        if (!validateCardNumber(cardNumberInput.value)) {
            alert('Invalid card number');
            valid = false;
        } else if (!validateCardHolder(cardHolderInput.value)) {
            alert('Invalid card holder name');
            valid = false;
        } else if (!validateExpirationDate(expirationDateInput.value)) {
            alert('Invalid expiration date');
            valid = false;
        } else if (!validateCVV(cvvInput.value)) {
            alert('Invalid CVV');
            valid = false;
        }

        if (!valid) {
        }
    });

    function validateCardNumber(number) {
        return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(number);
    }

    function validateCardHolder(name) {
        return /^[a-zA-Z\s]+$/.test(name);
    }

    function validateExpirationDate(date) {
        return /^\d{2}\/\d{2}$/.test(date);
    }

    function validateCVV(cvv) {
        return /^\d{3}$/.test(cvv);
    }
});

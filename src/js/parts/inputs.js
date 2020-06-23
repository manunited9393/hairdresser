const inputValue = () => {
    const phoneInput = document.querySelector('input[name="phone"]');

    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/, '');
    });
}

module.exports = inputValue;
// Defining variables
const nameInput = document.querySelector('.container__form--name-input');
const numberInput = document.querySelector('.container__form--number-input');
const monthInput = document.querySelector('.container__form--details-date-input-month');
const yearInput = document.querySelector('.container__form--details-date-input-year');
const cvcInput = document.querySelector('.container__form--details-cvc-input');
const submit = document.querySelector('.container__form--submit-button');
const nameError = document.querySelector('#name-error');
const numberError = document.querySelector('#number-error');
const dateError = document.querySelector('#date-error');
const cvcError = document.querySelector('#cvc-error');


function errorCheck(e) {
    if (nameInput.value == '' && numberInput.value == '' && monthInput.value == '' && yearInput.value == '' && cvcInput.value == '') {
        nameError.style.display = 'block';
        numberError.style.display = 'block';
        dateError.style.display = 'block';
        cvcError.style.display = 'block';
        nameInput.style.borderColor = 'red';
        numberInput.style.borderColor = 'red';
        monthInput.style.borderColor = 'red';
        yearInput.style.borderColor = 'red';
        cvcInput.style.borderColor = 'red';
    } else {
        if (nameInput.value == '') {
            nameError.style.display = 'block';
            nameInput.style.borderColor = 'red';
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderColor = 'grey';
            if (numberInput.value == '') {
                numberError.style.display = 'block';
                numberInput.style.borderColor = 'red';
            } else {
                numberError.style.display = 'none';
                numberInput.style.borderColor = 'grey';
                if (monthInput.value == '' || yearInput.value == '') {
                    dateError.style.display = 'block';
                    monthInput.style.borderColor = 'red';
                    yearInput.style.borderColor = 'red';
                } else {
                    dateError.style.display = 'none';
                    monthInput.style.borderColor = 'grey';
                    yearInput.style.borderColor = 'grey';
                    if (cvcInput.value == '') {
                        cvcError.style.display = 'block';
                        cvcInput.style.borderColor = 'red';
                    } else {
                        window.location.href = "./complete.html";
                    }
                }
            }
        }
    }

}

submit.addEventListener('click', errorCheck);
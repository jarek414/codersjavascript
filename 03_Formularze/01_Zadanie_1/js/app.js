// const doc = document;
// doc.addEventListener('DOMContentLoaded', function () {
//     const form = doc.querySelector('form');
//     const email = form.querySelector('#email');
//     const name = form.querySelector('#name');
//     const surname = form.querySelector('#surname');
//     const pass1 = form.querySelector('#pass1');
//     const pass2 = form.querySelector('#pass2');
//     const checkbox = form.querySelector('#agree');
//     const errorMsg = form.querySelector('#error-message');
//     const successMes = form.querySelector('#success-message');
//
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         let isValid = true;
//
//         if (email.value.indexOf('@') < 0) {
//             errorMsg.innerText = 'Email musi posiadac znak @';
//         } else if (name.value.length <= 2){
//             errorMsg.innerText = 'twoje imie jest za ktortkie';
//         } else if (surname.value.length <= 2){
//              errorMsg.innerText = 'twoje nazwisko jest za ktortkie';
//         } else if (pass1.value === '' || pass2.value === '' || pass1.value !== pass2.value){
//             errorMsg.innerText = 'hasla nie sa takie same lub sa za krotkie';
//         } else if (checkbox.checked === false){
//             errorMsg.innerText = 'musisz zaznaczyc zgodzy';
//             isValid = false;
//         }
//         if (isValid) {
//             errorMsg.classList.add('d-none');
//             successMes.innerText = 'Formularz wyslany';
//             successMes.classList.remove('d-none');
//         } else {
//             successMes.classList.add('d-none');
//             errorMsg.classList.remove('d-none');
//         }
//     });
// });


const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const form = doc.querySelector('form');
    const email = form.querySelector('#email');
    const name = form.querySelector('#name');
    const surname = form.querySelector('#surname');
    const pass1 = form.querySelector('#pass1');
    const pass2 = form.querySelector('#pass2');
    const checkbox = form.querySelector('#agree');
    const errorMsg = form.querySelector('#error-message');
    const successMsg = form.querySelector('#success-message');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        if (email.value.indexOf('@') < 0) {
            errorMsg.innerText = 'Email musi posiadać znak @';
            isValid = false;
        } else if (name.value.length <= 2) {
            errorMsg.innerText = 'Twoje imię jest za krótkie';
            isValid = false;
        } else if (surname.value.length <= 2) {
            errorMsg.innerText = 'Twoje nazwisko jest za krótkie';
            isValid = false;
        } else if (pass1.value === '' || pass2.value === '' || pass1.value !== pass2.value) {
            errorMsg.innerText = 'Hasła nie są takie same lub puste';
            isValid = false;
        } else if (checkbox.checked === false) {
            errorMsg.innerText = 'Musisz zaakceptować warunki';
            isValid = false;
        }
        if (isValid) {
            errorMsg.classList.add('d-none');
            successMsg.innerText = 'Formularz wysłany!';
            successMsg.classList.remove('d-none');
        } else {
            successMsg.classList.add('d-none');
            errorMsg.classList.remove('d-none');
        }
    });
});












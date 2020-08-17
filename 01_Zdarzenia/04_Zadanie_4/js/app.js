// const doc = document;
// doc.addEventListener('DOMContentLoaded', function () {
//     let counter = 0;
//     const counterElement = doc.querySelector('span.counter');
//     const button = Array.from(doc.querySelectorAll('button'));
//
//     button.forEach(function (el) {
//
//
//     }
// });

const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(doc.querySelectorAll('button'));
    const counterElement = doc.querySelector('span.counter');
    let counter = 0;
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            counter += 1;
            counterElement.innerText = counter;
        });
    });
});
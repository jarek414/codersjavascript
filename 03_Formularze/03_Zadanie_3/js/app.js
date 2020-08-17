// const doc = document;
// doc.addEventListener('DOMContentLoaded', function () {
//     const images = Array.from(doc.querySelectorAll('img'));
//     const button = doc.querySelector('button.btn');
//     const select = doc.querySelector('select.form-control');
//     const windowsOption = select.children[0];
//     windowsOption.seleced = true;
//
//     setupImages(images, windowsOption, innerText);
//
//     button.addEventListener('click', function (event) {
//         event.preventDefault();
//     });
// });
//
// function setupImages(images, imagesToShow) {
//     images.forEach(function (image) {
//         if (image.getAttribute('alt') === 'imagesToShow') {
//             image.classList.remove('d-none');
//         } else {
//             image.classList.add('d-none');
//         }
//     });
// }


const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const images = Array.from(doc.querySelectorAll('img'));
    const button = doc.querySelector('button.btn');
    const select = doc.querySelector('select.form-control');
    const windowsOption = select.children[0];
    windowsOption.selected = true;
    setupImages(images, windowsOption.innerText);
    button.addEventListener('click', function (event) {
        event.preventDefault();
        setupImages(images, select.value);
    });
});
function setupImages(images, imageToShow) {
    images.forEach(function (image) {
        if (image.getAttribute('alt') === imageToShow) {
            image.classList.remove('d-none');
        } else {
            image.classList.add('d-none');
        }
    });
}
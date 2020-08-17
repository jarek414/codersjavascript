const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const box = doc.querySelector('#box');
    const globalX = doc.querySelector('#globalX');
    const globalY = doc.querySelector('#globalY');
    const localX = doc.querySelector('#localX');
    const localY = doc.querySelector('#localY');
    box.addEventListener('mousemove', function (event) {
        globalX.innerText = event.offsetX;
        globalY.innerText = event.offsetY;
        localX.innerText = event.offsetX;
        localY.innerText = event.offsetY;

    })

});

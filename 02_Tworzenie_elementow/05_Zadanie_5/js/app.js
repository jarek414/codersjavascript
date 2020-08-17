const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const btn = doc.querySelector('button#remove');
    const li = Array.from(doc.querySelectorAll('li'));

    btn.addEventListener('click', function () {
        li.forEach(function (el) {
            el.parentElement.removeChild(el);
        });
    });
});
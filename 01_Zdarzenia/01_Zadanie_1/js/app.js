const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const parents = Array.from(doc.querySelectorAll('.parent'));
    // obsluga zdarzenia mouseover
    parents.forEach(function (parentElement) {
        parentElement.addEventListener('mouseover', function () {
            parentElement.querySelector('.children').style.display = 'block';
        });
    });
    // obsluga zdarzenia mouseout
    parents.forEach(function (parentElement) {
        parentElement.addEventListener('mouseout', function () {
            parentElement.querySelector('.children').style.display = 'none';
        });
    });
});

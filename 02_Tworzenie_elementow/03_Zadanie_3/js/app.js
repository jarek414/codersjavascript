const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const button = doc.querySelector('.btn');
    const el = doc.querySelector('ul');
    button.addEventListener('click', function () {
        const newLi = doc.createElement("li").classList.add('list-group');
        const list = doc.querySelectorAll('li');
        const countListElement = list.length;
        const numberOfItems = countListElement - 1;
        newLi.innerText = `Element ${countListElement} - w chwili dodania było ${numberOfItems} elementów`
        el.appendChild('newLi');
    });
});
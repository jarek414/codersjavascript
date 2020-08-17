const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const button1 = doc.querySelector('#button1');
    let counter1 = 0;
    button1.addEventListener('click', function () {
        counter1 += 1;
        this.parentElement.querySelector('span.counter').innerText = counter1;

    });

    const button2 = doc.querySelector('#button2');
    let counter2 = 0;
    button2.addEventListener('click', function () {
        counter2 += 1;
        this.parentElement.querySelector('span.counter').innerText = counter2;

    });
    const button3 = doc.querySelector('#button3');
    let counter3 = 0;
    button3.addEventListener('click', function () {
        counter3 += 1;
        this.parentElement.querySelector('span.counter').innerText = counter3;

    });
});
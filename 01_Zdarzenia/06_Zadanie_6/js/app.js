const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const box1 = doc.querySelector('#box1');
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box1.addEventListener('click', function () {
        this.backgroundColor = randomColor;

    });
});

// const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const button = doc.querySelector('button');
    const input = doc.querySelector('input');
    const section = doc.querySelector('section');

    button.addEventListener('click', function (event) {
        event.preventDefault();

        const isbn = input.value;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(function (result) {
                return result.json();
            }).then(function (result) {
            const bookInfo = result.items[0];

            const titleElement = doc.createElement('h2');
            titleElement.innerText = bookInfo.volumeInfo.title;
            section.appendChild(titleElement);

        })
            .catch(function (reason) {
                console.log(reason);
            });
    });
});
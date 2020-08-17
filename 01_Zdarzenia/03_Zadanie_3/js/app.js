const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const button = doc.querySelector('button');

    function saySomething(event) {
        console.log(`hura działa`);
    }

    button.addEventListener('click', saySomething);
});



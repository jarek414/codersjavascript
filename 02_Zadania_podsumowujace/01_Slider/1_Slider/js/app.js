const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const div = doc.querySelector('div');
    div.classList.add('slider');

    const listOfAllPictures = Array.from(doc.querySelectorAll('li'));
    const prev = doc.querySelector('#prevPicture');
    const next = doc.querySelector('#nextPicture');

    let index = 0;
    console.log(index);
    listOfAllPictures[index].classList.add('visible');

    next.addEventListener('click', function() {
         listOfAllPictures[index].classList.remove('visible');
         index += 1;
         if (index === listOfAllPictures.length) {
             index = 0;
         }
         listOfAllPictures[index].classList.add('visible');
    });

    prev.addEventListener('click', function() {
         listOfAllPictures[index].classList.remove('visible');
         index -= 1;
         if (index < 0) {
             index = listOfAllPictures.length - 1;
         }
         listOfAllPictures[index].classList.add('visible');
    });
});

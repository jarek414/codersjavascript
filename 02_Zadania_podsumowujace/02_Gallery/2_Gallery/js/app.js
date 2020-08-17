/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const listOfAllPictures = Array.from(doc.querySelectorAll('li'));
    const body = doc.querySelector('body');

    console.log(listOfAllPictures);
    console.log(body);


    listOfAllPictures.forEach(function (picture) {
        picture.addEventListener('click', function () {
            let newDiv = doc.createElement('div');
            newDiv.classList.add('fullScreen');

            console.log(this)
        });
    });
});
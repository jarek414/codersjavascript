const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const menu = doc.querySelectorAll("#menu li");
    console.log(getDataInfo(menu));
    const secondID = doc.querySelector("#main-container");
    console.log(getElementClass(secondID));
    const classToFind = doc.querySelector(".pink-color");
    console.log(getElementText(classToFind));
    const imagesClass = doc.querySelectorAll('.images');
    console.log(getElementAlt(imagesClass));
    const myLink =  doc.querySelectorAll('.my-link');
    console.log(getElementHref(myLink));
});

function getDataInfo(elements) {
    menuChildren = [];
    for (let i = 0; i < elements.length; i++) {
        menuChildren.push(elements[i].dataset.info);
    }
    return menuChildren;
}

function getElementClass(element) {
    const elementClass = element.classList;
    return elementClass;
}

function getElementText(element) {
    const elementText = element.innerText;
    return elementText;
}

function getElementAlt(elements) {
    allImages = [];
    for (let i = 0; i < elements.length; i++) {
        allImages.push(elements[i].alt);
    }
    return allImages;

}

function getElementHref(elements){
        allHref = [];
    for (let i = 0; i < elements.length; i++) {
        allHref.push(elements[i].getAttribute('href'));
    }
    return allHref;
}

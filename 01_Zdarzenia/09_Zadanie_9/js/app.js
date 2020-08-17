const doc = document;
doc.addEventListener('DOMContentLoaded', function (){
    const widthEl = doc.querySelector('#windowWidth');
    const HeightEl = doc.querySelector('#windowHeight');

    window.addEventListener('resize', function (){
        widthEl.innerText = window.innerWidth + 'px';
        HeightEl.innerText = window.innerHeight + 'px';
    });
});
const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const button = doc.querySelector('#remove');
    button.addEventListener('click', function(){
        this.parentElement.removeChild(this);
    });
});
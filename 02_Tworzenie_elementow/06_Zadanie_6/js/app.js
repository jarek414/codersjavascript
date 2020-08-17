const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const list1 = doc.querySelector('#list1');
    const list2 = doc.querySelector('#list2');
    const items = Array.from(doc.querySelectorAll('a.list-group-item'));

    function onClick(){
        const cloneItem = this.cloneNode(true);
        cloneItem.addEventListener('click', onClick)
    }
});

const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const invoiceData = doc.querySelector('#invoiceData')
    invoiceData.classList.add('d-none');

    const checkbox = doc.querySelector('#invoice');
    checkbox.addEventListener('click', function (){
        if (this.checked){
            invoiceData.classList.remove('d-none');
        } else {
             invoiceData.classList.add('d-none');
        }
    });
});
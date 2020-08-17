const doc = document;
doc.addEventListener('DOMContentLoaded', function(){
    const btn = doc.querySelector('button#add');
    const orderId = doc.querySelector('#orderId');
    const item = doc.querySelector('#item');
    const quantity = doc.querySelector('#quantity');
    const tBody = doc.querySelector('tbody');

    btn.addEventListener('click', function () {
        const tableRow = doc.createElement('tr');
        const tableCell1 = doc.createElement('td');
        const tableCell2 = doc.createElement('td');
        const tableCell3 = doc.createElement('td');

        tableCell1.innerText = orderId.value;
        tableCell2.innerText = item.value;
        tableCell3.innerText = quantity.value;

        tableRow.appendChild(tableCell1);
        tableRow.appendChild(tableCell2);
        tableRow.appendChild(tableCell3);

        tBody.appendChild(tableRow);

    });
});
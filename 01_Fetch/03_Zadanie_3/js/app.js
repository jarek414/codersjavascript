const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const div = doc.querySelector('div');
    const ulToAdd = doc.createElement('ul');
    div.appendChild(ulToAdd)
    const input = doc.querySelector('#country');
    const button = doc.querySelector('button');

    button.addEventListener('click', function (event) {
        event.preventDefault();

        const country = input.value;

        fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${country}`)
            .then(function (result) {
                return result.json();
            }).then(function (result) {
            const holidays = result.holidays;

            holidays.forEach(function (holiday) {
                const addHoliday = doc.createElement('li');
                const holidayName = doc.createElement('h3');
                const holidayDate = doc.createElement('p');
                holidayName.innerText = holiday.name;
                holidayDate.innerText = holiday.date;
                addHoliday.appendChild(holidayName);
                addHoliday.appendChild(holidayDate);
                ulToAdd.appendChild(addHoliday);
            });
        })

            .catch(function (reason) {
                console.log(reason);
            });

    });
});
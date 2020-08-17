const doc = document;
doc.addEventListener('DOMContentLoaded', function () {

    const ul = doc.querySelector('.list');
    fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(function (result) {
            return result.json();
        }).then(function (result) {

        result.results.forEach(function (pokemon) {
            const addPokemon = doc.createElement('li');
            addPokemon.innerText = pokemon.name;
            ul.appendChild(addPokemon);
        });

    })
        .catch(function (reason) {
            console.log(reason);
        });
});


document.querySelector("#search").addEventListener("click",getPokemon);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response)=>response.json())
    .then((data)=> {
        const img = document.querySelector("#pokemonSprite");
        const nameH1 = document.querySelector("#displayName");
        const weightP = document.querySelector("#displayWeight");

        img.src = data.sprites.other["official-artwork"].front_default;
        img.alt = data.name;
        nameH1.textContent = capitalizeFirstLetter(data.name);
        weightP.textContent = `Weight: ${data.weight}`;
    })
    .catch((err) => {
        console.log("Pokemon not found", err);
    })

    e.preventDefault();
}

getPokemon()
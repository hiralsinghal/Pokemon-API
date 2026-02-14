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
        const nameH2 = document.querySelector("#displayName");
        const weightP = document.querySelector("#displayWeight");
        const heightP = document.querySelector("#displayHeight");
        const abilityP =document.querySelector("#displayAbility");
        const baseExperienceP = document.querySelector("#displayBaseExperience")
        const typeP = document.querySelector("#displayType");
        const moveP = document.querySelector("#displayMove");

        img.src = data.sprites.other["official-artwork"].front_default;
        img.alt = data.name;
        nameH2.textContent = capitalizeFirstLetter(data.name);
        weightP.textContent = `Weight: ${data.weight}`;
        heightP.textContent = `Height: ${data.height}`;
        abilityP.textContent = `Ability: ${capitalizeFirstLetter(data.abilities[0].ability.name)} & ${capitalizeFirstLetter(data.abilities[1].ability.name)}`;
        baseExperienceP.textContent = `Base Experience: ${data.base_experience}`;
        typeP.textContent = `Type: ${capitalizeFirstLetter(data.types[0].type.name)}`;
        moveP.textContent = `Moves: ${capitalizeFirstLetter(data.moves[0].move.name)}`;
    })
    .catch((err) => {
        console.log("Pokemon not found", err);
    })

    e.preventDefault();
}

getPokemon()
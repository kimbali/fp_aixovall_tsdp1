const params = new URLSearchParams(window.location.search);
const pokemonName = params.get("pokemon");
const resultContainer = document.getElementById("evolucioResult");

async function getEvolutionChain(pokemon) {
  try {
    const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
    const speciesData = await res1.json();
    const evoUrl = speciesData.evolution_chain.url;

    const res2 = await fetch(evoUrl);
    const evoData = await res2.json();

    const chain = [];
    let current = evoData.chain;

    while (current) {
      chain.push(current.species.name);
      current = current.evolves_to[0];
    }

    return chain;
  } catch (error) {
    console.error("Error amb la cadena evolutiva:", error);
    return [];
  }
}

async function getMegaEvolutions(pokemon) {
  const megaForms = [];

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
    const speciesData = await res.json();

    for (const variety of speciesData.varieties) {
      const name = variety.pokemon.name;
      if (name.includes("mega")) {
        megaForms.push(name);
      }
    }

    return megaForms;
  } catch (error) {
    console.error("Error obtenint megaevolucions:", error);
    return [];
  }
}

async function showPokemon(name) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(r => r.json());

  const div = document.createElement("div");
  div.innerHTML = `
    <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
    <img src="${data.sprites.front_default}" alt="${name}" />
  `;
  resultContainer.appendChild(div);
}

async function showEverything() {
  resultContainer.innerHTML = "<p>Carregant evolucions i formes especials...</p>";

  const evolucions = await getEvolutionChain(pokemonName);
  const megas = await getMegaEvolutions(pokemonName);

  resultContainer.innerHTML = "<h2>Evolucions</h2>";
  for (const name of evolucions) {
    await showPokemon(name);
  }

  if (megas.length > 0) {
    const title = document.createElement("h2");
    title.textContent = "Mega evolucions";
    resultContainer.appendChild(title);

    for (const name of megas) {
      await showPokemon(name);
    }
  }
}

if (pokemonName) {
  showEverything();
} else {
  resultContainer.innerHTML = "<p>No s'ha especificat cap Pokémon.</p>";
}

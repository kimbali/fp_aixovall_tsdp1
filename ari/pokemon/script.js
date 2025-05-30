async function fetchPokemons(pokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Error a la resposta");
    }
    return await response.json();
  } catch (error) {
    console.error("Hi ha hagut un error:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("pokemonInput");
  const resultContainer = document.getElementById("pokemonResult");
  const evolutionButton = document.getElementById("evolutionButton");

  input.addEventListener("input", async () => {
    const inputValue = input.value.trim();
    resultContainer.innerHTML = "";
    evolutionButton.style.display = "none";

    if (inputValue.length === 0) return;

    resultContainer.innerHTML = "<p>Carregant...</p>";

    const result = await fetchPokemons(inputValue);

    resultContainer.innerHTML = "";

    if (result) {
      const capitalitza = text => text.charAt(0).toUpperCase() + text.slice(1);

      const name = document.createElement("h2");
      name.textContent = capitalitza(result.name);
      resultContainer.appendChild(name);

      const number = document.createElement("p");
      number.textContent = `Nº Pokédex: ${result.id}`;
      resultContainer.appendChild(number);

      const image = document.createElement("img");
      image.src = result.sprites.front_default;
      image.alt = result.name;
      resultContainer.appendChild(image);

      const height = document.createElement("p");
      height.textContent = `Alçada: ${result.height / 10} m`;
      resultContainer.appendChild(height);

      const weight = document.createElement("p");
      weight.textContent = `Pes: ${result.weight / 10} kg`;
      resultContainer.appendChild(weight);

      const types = document.createElement("p");
      types.textContent = `Tipus: ${result.types.map(t => capitalitza(t.type.name)).join(", ")}`;
      resultContainer.appendChild(types);

      // Mostrar el botó i passar el nom del Pokémon com a paràmetre
      evolutionButton.style.display = "inline-block";
      evolutionButton.onclick = () => {
        window.location.href = `evolucions.html?pokemon=${result.name}`;
      };
    } else {
      const errorText = document.createElement("p");
      errorText.style.color = "red";
      errorText.textContent = "No s'ha trobat el Pokémon.";
      resultContainer.appendChild(errorText);
    }
  });
});

import { generateRandomIds, getPokemon } from "./pokemon.js";
import {
  addCard,
  displayAllPokemon,
  filterPokemon,
  showDetails,
} from "./dom.js";

window.addEventListener("DOMContentLoaded", async () => {
  const cardsContainer = document.querySelector(".cards");
  const randomIds = generateRandomIds(40);
  const response = await getPokemon(randomIds);

  response.map(async (item) => {
    if (document.querySelector(".cards__loading-msg")) {
      document.querySelector(".cards__loading-msg").remove();
    }

    const object = await item.json();

    const name = object["name"];
    const type = object["types"].map((i) => i["type"]["name"]);
    const imgURL = object["sprites"]["front_default"];
    const abilities = object["abilities"].map((item) => item.ability.name);

    const pokemon = {
      name: name,
      type: type,
      imgURL: imgURL,
      abilities: abilities,
    };

    addCard(pokemon, cardsContainer);

    // document.querySelector(`#${pokemon.name}`).addEventListener("click", () => {
    //   alert(
    //     `${pokemon.name}'s abilities: \n- ${pokemon.abilities.join("\n- ")}`
    //   );
    // });

    document.querySelector(`#${pokemon.name}`).addEventListener("click", () => {
      showDetails(pokemon);
    });
  });

  document
    .querySelector(".search__button")
    .addEventListener("click", filterPokemon);

  document.querySelector(".search__reset-btn").addEventListener("click", () => {
    displayAllPokemon();
    document.querySelector(".search__textbox").value = "";
  });

  document.querySelector(".modal__close__img").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("modal--hidden");
    document.querySelector(".overlay").classList.add("overlay--hidden");
  });
});

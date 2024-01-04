export const generateRandomIds = (numOfIds) => {
  const NUMBER_OF_POKEMON_SPECIES = 1025;
  let idsArr = [];

  for (let i = 0; i < numOfIds; i++) {
    const randomId = Math.floor(Math.random() * NUMBER_OF_POKEMON_SPECIES);
    idsArr.push(randomId);
  }

  return idsArr;
};

export const generatePromise = (url) => {
  // return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
  return fetch(url);
};

export const getAbilityDesc = async (abilities) => {
  const promises = [];

  for (let i = 0; i < abilities.length; i++) {
    const promise = generatePromise(abilities[i]);
    promises.push(promise);
  }

  return await Promise.all(promises);
};

export const getPokemon = async (pokemonIds) => {
  const promises = [];

  for (let i = 0; i < pokemonIds.length; i++) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const promise = generatePromise(`${url}${pokemonIds[i]}`);
    promises.push(promise);
  }

  return await Promise.all(promises);
};

// export const createPokemonObjArr = (pokemonData) => {
//   return new Promise((res) => {
//     let pokemonObjArr = [];

//     pokemonData.map(async (item) => {
//       const object = await item.json();

//       const pokemonName = object["name"];
//       const pokemonType = object["types"].map((i) => i["type"]["name"]);
//       const pokemonImgURL = object["sprites"]["front_default"];

//       pokemonObjArr.push({
//         name: pokemonName,
//         type: pokemonType,
//         imgURL: pokemonImgURL,
//       });
//     });

//     res(pokemonObjArr);
//   });
// };

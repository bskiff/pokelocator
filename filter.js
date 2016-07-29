module.exports = (pokemon) => {
  return pokemon.filter((poke) => {
    // this is where we would put whatever filtering logic we want.
    // Right now it's filtering to just Pidgey, since Pidgey is the best pokemon
    return poke.pokemonId == 16;
  });
}

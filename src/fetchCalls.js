const pageSize = 25;
async function fetchSimplePokemonList(limit, offset){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json();
    return data.results;
}

async function fetchPokemonDetails(url){
    const response = await fetch(url);
    const data = await response.json();
    return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map(t => t.type.name),
          }
}

export async function fetchPageOfPokemon(pageNo){
  const listOfPokemonNames = await fetchSimplePokemonList(pageSize, pageNo*pageSize);
            const pokemonData = await Promise.all(
                listOfPokemonNames.map((pokemon)=>{
                    return fetchPokemonDetails(pokemon.url);
                })
            )
  return pokemonData
}

export async function fetchPokemonByName(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  if (!response.ok) return;
    const data = await response.json();
    return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map(t => t.type.name),
          }
}

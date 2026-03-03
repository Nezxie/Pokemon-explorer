import SearchBar from './SearchBar'
import PokemonList from './PokemonList'
import './App.css'
import logo from './assets/poke-ball.png'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {pokemonColors} from './assets/colorList'
import {useState , useEffect} from 'react'

const theme = createTheme({
  palette: {
    ...pokemonColors
  },
});

const pageSize = 25;

async function fetchPokemonList(limit, offset){
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

function App() {
  const [pokemonList, setPokemonList]=useState([]);
  const [pageNo, setPageNo] = useState(0)
  const [filters, setFilters] = useState([]);
    
  function filterByType(type){
        let index = filters.indexOf(type);
        if(index !== -1){
            setFilters(filters.filter(t=>t!==type));
        }
        else{
            setFilters([...filters,type]) ;
        }
  }

  function onShowMore(){
    setPageNo(pageNo+1)
  }

  function clearPokemonList(){
    setPokemonList([]);
  }

  function searchPokemon(value){
    console.log(value)
    clearPokemonList();

  }

    useEffect(()=>{
        const loadPokemons = async () => {
            const listOfPokemonNames = await fetchPokemonList(pageSize, pageNo*pageSize);
            const pokemonData = await Promise.all(
                listOfPokemonNames.map((pokemon)=>{
                    return fetchPokemonDetails(pokemon.url);
                })
            )
            setPokemonList([...pokemonList,...pokemonData]);
        }             
        loadPokemons();
        
    },[pageNo]);

    return (
    <ThemeProvider theme={theme}>
     <Typography variant="h3" component="h1"><img 
      src={logo}
      alt='pokeball icon'
      style={{ width: '1em', height: '1em', verticalAlign: "middle"}}
     ></img>Pokémon explorer</Typography>
     <SearchBar onFilter={filterByType} onSearch={searchPokemon}/>
     <PokemonList pokemonList={pokemonList} onShowMore={onShowMore}/>
    </ThemeProvider>
  )
}

export default App


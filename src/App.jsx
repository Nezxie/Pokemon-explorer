import {useState , useEffect, useRef} from 'react'
import SearchBar from './SearchBar'
import PokemonList from './PokemonList'
import Typography from '@mui/material/Typography';
import {pokemonColors} from './colorList.js'
import {fetchPageOfPokemon, fetchPokemonByName} from './fetchCalls.js'
import logo from './assets/poke-ball.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/App.css'

const theme = createTheme({
  palette: {
    ...pokemonColors
  },
});

function App() {
  const [pokemonList, setPokemonList]=useState([]);
  const [pageNumber, setPageNumber] = useState(0)
  const [filters, setFilters] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const searchRequestRef = useRef(0);

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
    setPageNumber(pageNumber+1);
  }

  function clearPokemonList(){
    setPokemonList([]);
    setPageNumber(0);
  }

  async function searchPokemon(value){
    if(!value.trim()){
      clearPokemonList();
      setIsSearchMode(false);
    }
    else{
      setIsSearchMode(true);
      const requestId = ++searchRequestRef.current;
      const foundPokemon = await fetchPokemonByName(value);
      if (requestId !== searchRequestRef.current){
        return;
      }
      if(foundPokemon){
        setPokemonList([foundPokemon])
      }
      else{
        clearPokemonList();
      }
    }
  }

    useEffect(()=>{
      let isStale = false;
      if(!isSearchMode){
        const loadPokemons = async () => {
            const pokemonData = await fetchPageOfPokemon(pageNumber);
            if(!isStale){
              setPokemonList(prev=>[...prev ,...pokemonData]);
            }
        }             
        loadPokemons();
      }
      return ()=>{ isStale = true; }
    },[pageNumber,isSearchMode]);

    return (
    <ThemeProvider theme={theme}>
     <Typography variant="h3" component="h1" className='header'><img 
      src={logo}
      alt='pokeball icon'
      style={{ width: '1em', height: '1em', verticalAlign: "middle"}}
     ></img>Pokémon explorer</Typography>
     <SearchBar onFilter={filterByType} onSearch={searchPokemon} filters={filters}/>
     <PokemonList pokemonList={pokemonList} onShowMore={onShowMore}/>
    </ThemeProvider>
  )
}

export default App
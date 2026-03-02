import SearchBar from './SearchBar'
import PokemonList from './PokemonList'
import './App.css'
import logo from './assets/poke-ball.png'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {pokemonColors} from './assets/colorList'

const theme = createTheme({
  palette: {
    ...pokemonColors
  },
});

function App() {
    return (
    <ThemeProvider theme={theme}>
     <Typography variant="h3" component="h1"><img 
      src={logo}
      alt='pokeball icon'
      style={{ width: '1em', height: '1em', verticalAlign: "middle"}}
     ></img>Pokémon explorer</Typography>
     <SearchBar/>
     <PokemonList/>
    </ThemeProvider>
  )
}

export default App

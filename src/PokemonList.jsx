import {useState , useEffect} from 'react'
import PokemonCard from "./PokemonCard";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

const pageSize =24;
export default function PokemonList({}){
    const [pokemonList, setPokemonList]=useState([]);
    const [pageNo, setPageNo] = useState(0)

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
        <>
            <Grid container spacing={2}>
            {
                pokemonList.map(pokemon=>{
                    return ( 
                    <Grid size={4} key={pokemon.id}>
                        <PokemonCard 
                        pokemonData={pokemon}/>
                    </Grid>
                    )
                })
            }
            </Grid>
            <Button variant="contained" onClick={()=>{setPageNo(pageNo+1)}}>Load more</Button>
        </>
    );
}

async function fetchPokemonList(limit, offset, type=""){
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


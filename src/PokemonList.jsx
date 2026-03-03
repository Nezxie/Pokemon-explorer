import PokemonCard from "./PokemonCard";
import { Grid, Button, Typography } from "@mui/material";
import './styles/PokemonList.css'

export default function PokemonList({pokemonList, onShowMore, showLoadMoreButton}){
    return (
        <>
        {
            pokemonList.length>0?
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
            :<Typography variant="h5" component="h3">No pokemons found</Typography>

        }
            {showLoadMoreButton&&<Button variant="contained" className="load-more-button" onClick={()=>{onShowMore()}}>Load more</Button>}
        </>
    );
}

import PokemonCard from "./PokemonCard";
import { Grid, Button } from "@mui/material";

export default function PokemonList({pokemonList, onShowMore}){
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
            <Button variant="contained" onClick={()=>{onShowMore}}>Load more</Button>
        </>
    );
}

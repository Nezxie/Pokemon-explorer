import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
export default function PokemonCard({pokemonData}){
    return (
        <Card>
            <CardMedia
                component="img"
                height="150"
                image={pokemonData.image}
                alt={pokemonData.name}
                sx={{ objectFit: "contain"}}
            />
            <CardContent>
                <Typography variant="h5">
                    {pokemonData.name}
                </Typography>
                {pokemonData.id}
                {pokemonData.types.map((type)=>{
                    return <Chip key={type} label={type}/>
                })}
            </CardContent>
        </Card>    
    );
}
import { Card, CardContent, CardMedia, Typography, Chip, Stack, capitalize } from "@mui/material";
import './styles/PokemonCard.css'
import {pokemonColors} from './colorList.js'

export default function PokemonCard({pokemonData}){
    const colors = pokemonData.types.map(type => pokemonColors[type].main || "#ccc")
    const cardBackground = colors.length === 1?colors[0]:`linear-gradient(135deg, ${colors.join(", ")})`
    console.log(cardBackground)
    return (
        <Card
            sx={{
            "background":cardBackground
            }}
        >
            <CardMedia
                component="img"
                height="150"
                image={pokemonData.image}
                alt={pokemonData.name}
                sx={{ objectFit: "contain"}}
            />
            <CardContent>
                <Typography variant="h4" component="h3">
                    {pokemonData.name}
                </Typography>
                <Typography variant="h6" component="p">
                {pokemonData.id}
                </Typography>
                <Stack direction="row" justifyContent="center" marginY="2rem" spacing={1}>
                {pokemonData.types.map((type)=>{
                    return <Chip key={type} label={type}/>
                })}
                </Stack>
            </CardContent>
        </Card>    
    );
}
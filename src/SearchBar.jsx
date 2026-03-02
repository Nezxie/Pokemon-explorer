import {useState} from "react";
import {TextField, Chip, Stack} from '@mui/material';
import {pokemonTypes} from './assets/colorList'

export default function SearchBar({}){
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

    return (
        <>
        <TextField id="search-bar" label="Search pokemon" variant="filled" />
        <Stack direction="row" spacing={1}>
            {
                pokemonTypes.map((type)=>{
                    
                    return(
                        <Chip key={type} label={type} onClick={()=>{filterByType(type)}} color={type}/>
                    )
                })
            }
        </Stack>
        </>
    );
}


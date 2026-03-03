import {TextField, Chip, Stack} from '@mui/material';
import {pokemonTypes} from './assets/colorList'
import { useRef } from "react";

export default function SearchBar({onFilter, onSearch}){
    const debounceRef = useRef(null);
    
    function onSearchInputChange(value){
        if (debounceRef.current){
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(()=>{
            onSearch(value)
        },1000)
    }

    return (
        <>
        <TextField id="search-bar" label="Search pokemon" variant="filled" onChange={(e)=>{onSearchInputChange(e.target.value)}}/>
        <Stack direction="row" spacing={1}>
            {
                pokemonTypes.map((type)=>{
                    
                    return(
                        <Chip key={type} label={type} onClick={()=>{onFilter(type)}} color={type}/>
                    )
                })
            }
        </Stack>
        </>
    );
}


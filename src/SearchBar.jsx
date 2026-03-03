import {Input, Chip, Stack} from '@mui/material';
import {pokemonTypes} from './colorList'
import { useRef } from "react";
import './styles/SearchBar.css';

export default function SearchBar({onFilter, onSearch, filters}){
    const debounceRef = useRef(null);
    
    function onSearchInputChange(value){
        if (debounceRef.current){
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(()=>{
            onSearch(value)
        },500)
    }

    return (
        <>
        <Input id="search-bar" disableUnderline={true}  placeholder="Search pokemon..." variant="filled" onChange={(e)=>{onSearchInputChange(e.target.value)}} />
        <Stack direction="row" justifyContent="center" marginY="2rem" spacing={1}>
            {
                pokemonTypes.map((type)=>{
                    let isSelected = filters.includes(type);
                    return(
                        <Chip key={type} label={type} onClick={()=>{onFilter(type)}} color={type} className={`pill-filter ${isSelected?"selected-filter":""}`}/>
                    )
                })
            }
        </Stack>
        </>
    );
}


import { alpha, getContrastRatio } from '@mui/material/styles';
export const pokemonTypes=[
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy"
]

export const pokemonColors = {
        normal: {
            main:"#A8A77A",
            light: alpha("#A8A77A", 0.5),
            dark: alpha("#A8A77A", 0.9),
            contrastText: getContrastRatio("#A8A77A", '#fff') > 4.5 ? '#fff' : '#111',
        },
        fire: {
            main:"#EE8130",
            light: alpha("#EE8130", 0.5),
            dark: alpha("#EE8130", 0.9),
            contrastText: getContrastRatio("#EE8130", '#fff') > 4.5 ? '#fff' : '#111',
        },
        water: {
            main:"#6390F0",
            light: alpha("#6390F0", 0.5),
            dark: alpha("#6390F0", 0.9),
            contrastText: getContrastRatio("#6390F0", '#fff') > 4.5 ? '#fff' : '#111',
        },
        electric: {
            main:"#F7D02C",
            light: alpha("#F7D02C", 0.5),
            dark: alpha("#F7D02C", 0.9),
            contrastText: getContrastRatio("#F7D02C", '#fff') > 4.5 ? '#fff' : '#111',
        },
        grass: {
            main:"#7AC74C",
            light: alpha("#7AC74C", 0.5),
            dark: alpha("#7AC74C", 0.9),
            contrastText: getContrastRatio("#7AC74C", '#fff') > 4.5 ? '#fff' : '#111',
        },
        ice: {
            main:"#96D9D6",
            light: alpha("#96D9D6", 0.5),
            dark: alpha("#96D9D6", 0.9),
            contrastText: getContrastRatio("#96D9D6", '#fff') > 4.5 ? '#fff' : '#111',
        },
        fighting: {
            main:"#C22E28",
            light: alpha("#C22E28", 0.5),
            dark: alpha("#C22E28", 0.9),
            contrastText: getContrastRatio("#C22E28", '#fff') > 4.5 ? '#fff' : '#111',
        },
        poison: {
            main:"#A33EA1",
            light: alpha("#A33EA1", 0.5),
            dark: alpha("#A33EA1", 0.9),
            contrastText: getContrastRatio("#A33EA1", '#fff') > 4.5 ? '#fff' : '#111',
        },
        ground: {
            main:"#E2BF65",
            light: alpha("#E2BF65", 0.5),
            dark: alpha("#E2BF65", 0.9),
            contrastText: getContrastRatio("#E2BF65", '#fff') > 4.5 ? '#fff' : '#111',
        },
        flying: {
            main:"#A98FF3",
            light: alpha("#A98FF3", 0.5),
            dark: alpha("#A98FF3", 0.9),
            contrastText: getContrastRatio("#A98FF3", '#fff') > 4.5 ? '#fff' : '#111',
        },
        psychic: {
            main:"#F95587",
            light: alpha("#F95587", 0.5),
            dark: alpha("#F95587", 0.9),
            contrastText: getContrastRatio("#F95587", '#fff') > 4.5 ? '#fff' : '#111',
        },
        bug: {
            main:"#A6B91A",
            light: alpha("#A6B91A", 0.5),
            dark: alpha("#A6B91A", 0.9),
            contrastText: getContrastRatio("#A6B91A", '#fff') > 4.5 ? '#fff' : '#111',
        },
        rock: {
            main:"#B6A136",
            light: alpha("#B6A136", 0.5),
            dark: alpha("#B6A136", 0.9),
            contrastText: getContrastRatio("#B6A136", '#fff') > 4.5 ? '#fff' : '#111',
        },
        ghost: {
            main:"#735797",
            light: alpha("#735797", 0.5),
            dark: alpha("#735797", 0.9),
            contrastText: getContrastRatio("#735797", '#fff') > 4.5 ? '#fff' : '#111',
        },
        dragon: {
            main:"#6F35FC",
            light: alpha("#6F35FC", 0.5),
            dark: alpha("#6F35FC", 0.9),
            contrastText: getContrastRatio("#6F35FC", '#fff') > 4.5 ? '#fff' : '#111',
        },
        dark: {
            main:"#705746",
            light: alpha("#705746", 0.5),
            dark: alpha("#705746", 0.9),
            contrastText: getContrastRatio("#705746", '#fff') > 4.5 ? '#fff' : '#111',
        },
        steel: {
            main:"#B7B7CE",
            light: alpha("#B7B7CE", 0.5),
            dark: alpha("#B7B7CE", 0.9),
            contrastText: getContrastRatio("#B7B7CE", '#fff') > 4.5 ? '#fff' : '#111',
        },
        fairy: {
            main:"#D685AD",
            light: alpha("#D685AD", 0.5),
            dark: alpha("#D685AD", 0.9),
            contrastText: getContrastRatio("#D685AD", '#fff') > 4.5 ? '#fff' : '#111',
        }
    };

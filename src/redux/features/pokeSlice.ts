import { Info, Pokemon } from "@/components/List";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  pokemons: Info[]
  pokemon: Pokemon
  next: string
}
const initialPokemon = {
  name: '',
  id: 0,
  height: 0,
  weight: 0,
  abilities: [],
  types: [],
  forms: [],
  stats: [],
}

const initialState = {
  pokemons: [],
  next: 'https://pokeapi.co/api/v2/pokemon',
  pokemon: initialPokemon
} as InitialState

export const poke = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Info[]>) => {
      state.pokemons = action.payload
    },
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload
    },
    addPokemons: (state, action: PayloadAction<Info[]>) => {
      state.pokemons = state.pokemons.concat(action.payload)
    },
    setNext: (state, action: PayloadAction<string>) => {
      state.next = action.payload
    }
  }
})

export const { setPokemons, setPokemon, addPokemons, setNext } = poke.actions
export default poke.reducer
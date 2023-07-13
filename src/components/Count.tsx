import React from 'react'
import { revalidatePath } from 'next/cache'
import { store } from '@/redux/store'
import { addPokemons, setNext } from '@/redux/features/pokeSlice'

async function getNext(url: string) {
  const res = await fetch(url)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Count = () => {
  const { pokemons, next } = store.getState().poke
  async function addPokemonsAction() {
    'use server'
    const response = await getNext(next)
    const { count, next: newNext, previus, results } = response
    store.dispatch(addPokemons(results))
    store.dispatch(setNext(newNext))
    revalidatePath('/')
  }
  return (
    <div className="container">
      <div className='row'>
        <h1 className='col'>Contador de Pokemones: {pokemons.length}</h1>
        <form className='col' action={addPokemonsAction}>
          <button type='submit' className='btn btn-dark'> Cargar mas pokemones</button>
        </form>
      </div>
    </div>
  )
}

export default Count
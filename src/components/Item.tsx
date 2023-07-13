import Image from 'next/image'
import React from 'react'
import { Info } from './List'
import { revalidatePath } from 'next/cache'
import { setPokemon } from '@/redux/features/pokeSlice'
import { store } from '@/redux/store'
import Link from 'next/link'

const Item = (pokemon: Info, index: number) => {
  const {name} = pokemon
  const id = index + 1
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5>{id}</h5>
          <small className='text-uppercase'>{name}</small>
          {/* <p className="card-text">{url}</p> */}
        </div>
        <div className='text-center'>
          <Image src={src} width={96} height={96} alt={`${id} ${name} strite`}/>
        </div>
      </div>
    </div>
  )
}
async function getPoke(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
async function selectPokemon(data: any) {
  'use server'
  const id = data.get('id')
  // console.log(id)
  const pokemon = await getPoke(id)
  store.dispatch(setPokemon(pokemon))
  revalidatePath('/')
}

export const ItemArtwork = (pokemon: Info, index: number) => {
  const {name} = pokemon
  const id = index + 1
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{id}</h5>
          <p className="card-text text-uppercase">{name}</p>
          {/* <small className='text-uppercase'>{name}</small> */}
        </div>
        <div className='text-center'>
          <Image src={src} width={203} height={203} alt={`${id} ${name} strite`}/>
        </div>
        <div className='card-body'>
          <div className="d-grid gap-2">
            <Link className='btn btn-dark' href={`/pokemon/${id}`}>Seleccionar</Link>
            {/* <button type='button' as={Link}  className='btn btn-dark'>Seleccionar</button> */}
          </div>
          {/* <form className='col' action={selectPokemon}>
            <div className="d-grid gap-2">
              <button type='submit' name={'id'} value={id} className='btn btn-dark'>Seleccionar</button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default Item
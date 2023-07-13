import React from 'react'
import Item, { ItemArtwork } from './Item'
import Count from './Count'
import { store } from '@/redux/store'

export type Info = {
  name: string
  url: string
}
export type Pokemon = {
  name: string

  id: number
  height: number
  weight: number
  abilities: Ability[]
  types: Type[]
  forms: Info[]

  stats: property[]
}
type property = {
  base_stat: number
  effort: number
  stat: Info
}
type Type = {
  slot: number
  type: Info
}
type Ability = {
  ability: Info
  is_hidden: boolean
  slot: number
}

const List = () => {
  const { pokemons } = store.getState().poke
  return (
    <div className="row row-cols-md-3 row-cols-lg-6 g-2">
      {pokemons.map(ItemArtwork)}
    </div>
  )
}

export default List
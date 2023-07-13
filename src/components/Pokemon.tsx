import { store } from '@/redux/store'
import Image from 'next/image'
import React from 'react'
import { Pokemon } from './List'

const TwoCol = ({name, children}: {name: string, children: any}) => {
  return (
    <div className='row'>
      <div className='col text-end'>{name}</div>
      <div className='col text-muted'>{children}</div>
    </div>
  )
}

const Pokemon = ({ pokemon }: { pokemon : Pokemon }) => {
  const { name, id } = pokemon
  const { height, weight, abilities, types, forms } = pokemon
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  return (
    <div className='card'>
      <h5 className='card-header text-uppercase text-center'>{name}</h5>
      <div className='card-body'>
        <TwoCol name='ID'># {id}</TwoCol>
        <TwoCol name='Height'>{height}</TwoCol>
        <TwoCol name='Weight'>{weight}</TwoCol>
        <TwoCol name='Abilities'>{abilities.map(a => a.ability.name).join(', ')}</TwoCol>
        <TwoCol name='Type'>{types.map(t => t.type.name).join(', ')}</TwoCol>
        <TwoCol name='Forms'>{forms.map(f => f.name).join(', ')}</TwoCol>
      </div>
      <div className='text-center'>
        <Image src={src} width={406} height={406} alt={`${id} ${name} strite`}/>
      </div>
    </div>
  )
// const Pokemon = () => {
//   const { pokemon } = store.getState().poke
//   const { name, id } = pokemon
//   // const { id, height, width, abilities, type, forms } = pokemon
//   const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
//   return (
//     <div className='card text-center'>
//       <div className='card-header'>{name}</div>
//       <div className='card-body'>
//         <Image src={src} width={406} height={406} alt={`${id} ${name} strite`}/>
//       </div>
//     </div>
//   )
  // return (
  //   <div className="offcanvas offcanvas-end" tabIndex={-1}>
  //     <div className="offcanvas-header">
  //       <h5 className="offcanvas-title text-uppercase">{name}</h5>
  //       <button type="button" className="btn-close"></button>
  //     </div>
  //     <div className="offcanvas-body">
  //       <div className='text-center'>
  //         <Image src={src} width={406} height={406} alt={`${id} ${name} strite`}/>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Pokemon
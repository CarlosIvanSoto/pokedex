import List from "@/components/List"
import { setNext, setPokemons } from "@/redux/features/pokeSlice"
import { store } from "@/redux/store"

export async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Page() {
  const { pokemons } = store.getState().poke
  if (!pokemons.length) {
    const response = await getData()
    const { count, next, previus, results } = response
    store.dispatch(setPokemons(results))
    store.dispatch(setNext(next))
  }
  return <List />
}

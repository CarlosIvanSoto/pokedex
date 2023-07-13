import Pokemon from "@/components/Pokemon"

async function getPoke(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}
export default async function Page({ params: { id } }: { params: { id: string } }) {
  const pokemon = await getPoke(id)
  return <Pokemon pokemon={pokemon} />
}
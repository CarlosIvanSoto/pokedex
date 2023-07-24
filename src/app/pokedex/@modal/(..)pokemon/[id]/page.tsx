import Col from "@/components/Col"
import Modal from "@/components/Modal"
import Pokemon from "@/components/Pokemon"

async function getPoke(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}
export default async function Page({ params }: { params: { id: string } }) {
  const pokemon = await getPoke(params.id)
  return (
    <Modal>
      <Pokemon pokemon={pokemon}/>
    </Modal>
  )
}
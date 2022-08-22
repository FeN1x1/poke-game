export interface Pokemon {
  name: string
  id: number
  base_experience: number
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
  stats: []
  types: PokemonType[]
}

export type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export const pokemonTypesMap = new Map([
  ["normal", "bg-gray-300"],
  ["fire", "bg-red-300"],
  ["water", "bg-blue-300"],
  ["grass", "bg-green-300"],
  ["electric", "bg-yellow-300"],
  ["ice", "bg-cyan-300"],
  ["fighting", "bg-slate-200"],
  ["poison", "bg-slate-300"],
  ["ground", "bg-yellow-900"],
  ["flying", "bg-stone-50"],
  ["psycho", "bg-teal-300"],
  ["bug", "bg-green-100"],
  ["rook", "bg-lime-300"],
  ["ghost", "bg-neutral-300"],
  ["dark", "bg-black"],
  ["dragon", "bg-emerald-300"],
  ["steel", "bg-gray-200"],
  ["fairy", "bg-pink-300"],
])

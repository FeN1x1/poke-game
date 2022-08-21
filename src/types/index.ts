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
  ["normal", ""],
  ["fire", ""],
  ["water", ""],
  ["grass", "bg-green-300"],
  ["electric", ""],
  ["ice", ""],
  ["fighting", ""],
  ["poison", "bg-slate-300"],
  ["ground", ""],
  ["flying", ""],
  ["psycho", ""],
  ["bug", ""],
  ["rook", ""],
  ["ghost", ""],
  ["dark", ""],
  ["dragon", ""],
  ["steel", ""],
  ["fairy", ""],
])

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
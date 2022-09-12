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

export enum Player {
  first = "firstPlayer",
  second = "secondPlayer",
}

//pokemon store

export interface PokemonSets {
  playerPokemons: PlayerPokemons
  playerChoosingPokemons: Player | null
  battleState: BattleState
  selectPokemonForBattle: (player: Player, pokemonId: number | null) => void
  addPointToPlayer: (player: Player) => void
  setPlayerChoosingPokemons: (player: Player | null) => void
  removePlayersChoosingPokemons: () => void
  toggleBattleState: () => void
  addPokemonToPlayer: (
    player: keyof PlayerPokemons,
    pokemonId: number,
    pokemonName: string
  ) => void
  deletePokemonFromPlayer: (
    player: keyof PlayerPokemons,
    pokemonId: number | null
  ) => void
}

export type PlayerPokemons = {
  firstPlayer: PokemonInfo[]
  secondPlayer: PokemonInfo[]
}

export type PokemonInfo = {
  pokemonId: number
  pokemonName: string
}

type BattleState = {
  firstPlayer: PlayerBattleState
  secondPlayer: PlayerBattleState
  isInBattle: boolean
}

type PlayerBattleState = {
  pokemonId: number | null
  points: number
}

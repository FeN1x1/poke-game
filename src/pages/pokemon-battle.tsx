// Konsta UI components
import { Page } from "konsta/react"
import type { NextPage } from "next"
import { default as PokemonBattleComponent } from "../components/PokemonBattle/PokemonBattle"

const PokemonBattle: NextPage = () => {
  return (
    <Page>
      <PokemonBattleComponent />
    </Page>
  )
}

export default PokemonBattle

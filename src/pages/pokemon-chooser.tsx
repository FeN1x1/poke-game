// Konsta UI components
import { Page } from "konsta/react"
import type { NextPage } from "next"
import PokemonPicker from "../components/PokemonChooser/PokemonPicker"

const PokemonChooser: NextPage = () => {
  return (
    <Page>
      <PokemonPicker />
    </Page>
  )
}

export default PokemonChooser

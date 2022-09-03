const PokemonChose: React.FC<{text: string}> = ({text}) => {
  return (
    <div className="p-4">
      <div className="h-64 flex rounded shadow bg-white p-8 text-xl text-semibold">
        <div className="my-auto text-center">
         {text}
        </div>
      </div>
    </div>
  )
}

export default PokemonChose

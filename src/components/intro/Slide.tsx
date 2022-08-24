const Slide = () => {
  return (
    <div className="flex flex-col">
      <img
        className=" mx-auto w-1/2 mt-24 mb-18 pointer-events-none"
        src="https://ionicframework.com/docs/demos/api/slides/slide-1.png"
        alt="test"
      />
      <h2 className="mt-12 text-center">Test title</h2>
      <p className="py-18 text-lg text-center">
        <b>Appflow</b> is a powerful set of services and features built on top
        of Ionic Framework that brings a totally new level of app development
        agility to mobile dev teams.
      </p>
    </div>
  )
}

export default Slide

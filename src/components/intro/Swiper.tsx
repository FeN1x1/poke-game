import { Swiper as SwiperReact, SwiperSlide } from "swiper/react"
import { introSlides } from "../../types/staticData"
import "swiper/css"

import Slide from "./Slide"

const Swiper = () => {
  return (
    <SwiperReact className="h-full" spaceBetween={50} slidesPerView={1}>
      {introSlides.map((s) => (
        <SwiperSlide key={s.title} className="block">
          <Slide
            title={s.title}
            text={s.text}
            image={s.image}
            imageAlt={s.imageAlt}
            toPokemonChooser={s.toPokemonChooser}
          />
        </SwiperSlide>
      ))}
    </SwiperReact>
  )
}

export default Swiper

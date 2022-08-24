import { Swiper as SwiperReact, SwiperSlide } from "swiper/react"
import "swiper/css"
import Slide from "./Slide"

const Swiper = () => {
  return (
    <SwiperReact
      className="h-full"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="block">
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </SwiperReact>
  )
}

export default Swiper

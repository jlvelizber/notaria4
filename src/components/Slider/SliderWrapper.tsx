import React, { FC, Key } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { SliderInterface } from './SliderInterface'
import Slider from './Slider'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

export const SliderWrapper: FC<{ slides: SliderInterface[] }> = ({ slides }) => {
    return (
        <section className="banner-section">
            <Swiper
                className="owl-theme main-slider-carousel"
                modules={[Autoplay, Pagination]}
                autoplay={{delay: 5000, pauseOnMouseEnter: true }}
                pagination={{clickable: true}}
            >
                {slides.map((slide: SliderInterface, key: Key) => (
                    <SwiperSlide key={key}>
                        <Slider slide={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
import React from 'react'
import Comment from '../Common/Comment'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { CommentInterface } from '../../interfaces'
import ClienteSatisfechoImg from '@/images/home/cliente_satisfecho.png'
import TestimonialImg1 from '@/images/home/testimonial1.jpg'
import TestimonialImg2 from '@/images/home/testimonial2.jpg'
import TestimonialImg3 from '@/images/home/testimonial3.jpg'
import TestimonialImg4 from '@/images/home/testimonial4.jpg'
import TestimonialImg5 from '@/images/home/testimonial5.jpg'
import TestimonialImg6 from '@/images/home/testimonial6.jpg'
import 'swiper/css'
import 'swiper/css/autoplay'

const Comments = () => {
    const comments: CommentInterface[] = [
        {
            content:
                'Excelente atención en Notaría 4ta Daule . Los trámites salen en el mismo día cuando se trata de diligencia diarias tales como reconocimiento de firma de vehículos. Declaraciones..poderes especiales.u otros tramites. .compraventas en dos días listas para la firma..promesas de compraventas en el mismo día a mucho de un día para otro..',
            name: 'Glenda isabel Huacon garcia',
            role: 'Cliente',
            avatar: TestimonialImg2,
        },
        {
            content:
                'Muy buena atención profesional  y asesoramiento en los trámites , fácil parqueo , definitivamente no hay mejor lugar para hacer trámites y cerrar negocios',
            name: 'Ivan Heredia',
            role: 'Cliente',
            avatar: TestimonialImg1,
        },
        {
            content:
                'La atención en esta notaría es muy buena , el trato que recibí fue exelente y pude tener mis documentos a tiempo',
            name: 'Julia Paredes',
            role: 'Cliente',
            avatar: TestimonialImg3,
        },
        {
            content:
                'Excelente atención en Notaría 4ta Daule . Los trámites salen en el mismo día cuando se trata de diligencia diarias tales como reconocimiento de firma de vehículos. Declaraciones..poderes especiales.u otros tramites. .compraventas en dos días listas para la firma..promesas de compraventas en el mismo día a mucho de un día para otro..',
            name: 'Julio Huacon',
            role: 'Cliente',
            avatar: TestimonialImg4,
        },
        {
            content:
                'Muy buena atención profesional  y asesoramiento en los trámites , fácil parqueo , definitivamente no hay mejor lugar para hacer trámites y cerrar negocios',
            name: 'Iván Heredia',
            role: 'Cliente',
            avatar: TestimonialImg5,
        },
        {
            content:
                'Excelente atención, facilidad de parqueo, buena ubicación, asesoramiento profesional para trámites notariales. Recomendable',
            name: 'Xavier Nuñez',
            role: 'Cliente',
            avatar: TestimonialImg6,
        },
    ]

    return (
        <div className="lower-section">
            <div className="carousel-box">
                <div className="content">
                    <div className="single-item-carousel owl-carousel owl-theme">
                        <Swiper
                            className="owl-theme main-slider-carousel"
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                        >
                            {comments.map(
                                (comment: CommentInterface, key: React.Key) => (
                                    <SwiperSlide key={key}>
                                        <Comment comment={comment} />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="image d-none d-lg-block">
                <img src={ClienteSatisfechoImg} alt="" />
            </div>
        </div>
    )
}

export default Comments

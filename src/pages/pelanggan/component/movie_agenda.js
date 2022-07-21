import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import tmbd from "../../../apis/tmbd";
import './../../../css/costume-ui.css'

const MovieAgenda = () => {
    const [movies, setMovies] = useState([])
    const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original"
    const fetcData = async() => {
        try {
            const response = await tmbd.get('movie/now_playing');
            setMovies(response.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetcData()
    },[])

    return  (
        <>
            <h5 className='text-white pt-5'>On The Agenda</h5>
                <Swiper
                    spaceBetween={5}
                    centeredSlides={false}
                    slidesPerView={5}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    effect={'fade'}
                    style={{height:'25vh'}}>
                    {movies.map((movie, i) => {
                        return (
                            <SwiperSlide id={i} style={{backgroundColor:'#040a16'}}>
                                <Link to={"/movie/"+movie.id}>
                                    <Card className='card-slider'>
                                        <Card.Img src={`${BASE_IMAGE_URL}${movie.poster_path}`} className='center-cropped' alt="Logo"/>
                                    </Card>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
        </>
    )
}

export default MovieAgenda;
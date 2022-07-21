import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper"
import 'swiper/css'
import 'swiper/css/bundle'
import './../../../css/costume-ui.css'
import './../css/home.css'
import NavBar from "../component/navbar"
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import tmbd from '../../../apis/tmbd'
import Footer from '../component/footer'
import MoviePopular from '../component/movie_popular'
import MovieContinue from '../component/movie_continue'
import MovieAgenda from '../component/movie_agenda'
import MovieOriginal from '../component/movie_original'
import MovieTop from '../component/movie_top'
import MovieAgain from '../component/movie_again'
import MovieList from '../component/movie_list'

const Home = () => {
    const [movies, setMovies] = useState([])
    const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
    const fetchData = async() => {
        try {
            const response = await tmbd.get('trending/movie/week');
            setMovies(response.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchData()
    },[])

    return (
        <div className='bg-dop'>
            <NavBar/>
            <div style={{marginTop:'60px'}}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    effect={'fade'}
                    style={{height:'60vh'}}>
                    {movies.map((movie, i) => {
                        return (
                            <SwiperSlide id={i} style={{backgroundColor:'#040a16'}}>
                                <Row>
                                    <Col xs={5} className='p-5'>
                                        <h3 className='text-white'><b>{movie.title}</b></h3>
                                        <div style={{color:'#b4b6b9'}}>
                                            <p className='text-uppercase'>{movie.media_type} . {movie.original_language}</p>
                                            <p className='text-justify'>{movie.overview}</p>
                                        </div>
                                    </Col>                            
                                    <Col xs={7}>
                                        <div className='content-slide'>
                                            <img className='center-cropped' style={{height:'60vh'}} src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}/>
                                        </div>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className='p-5'>
                    <MoviePopular/>
                    <MovieContinue/>
                    <MovieAgenda/>
                    <MovieOriginal/>
                    <MovieTop/>
                    <MovieAgain/>
                    <MovieList/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
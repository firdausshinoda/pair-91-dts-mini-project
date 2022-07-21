import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import tmbd from "../../../apis/tmbd";
import NavBar from "../component/navbar";
import './../../../css/costume-ui.css'
import './../css/movie.css'
import Footer from "../component/footer";
import MoviePopular from "../component/movie_popular";
import MovieContinue from "../component/movie_continue";
import MovieAgenda from "../component/movie_agenda";
import MovieOriginal from "../component/movie_original";

const Movie = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])
    const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
    const fetcDetail = async() => {
        try {
            const response = await tmbd.get('movie/'+param.id);
            setMovie(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetcDetail()
    },[])

    return  (
        <div className='bg-dop'>
            <NavBar/>
            <div className="sampul-poster">
                <div>
                    <h1>{movie.original_title}</h1>
                    <p className="text-justify">{movie.overview}</p>
                    <Row>
                        <Col xs={4}>
                            <Link to={"/play/"+movie.id} className="btn btn-light w-100"><i className='fas fa-play'></i> Play</Link>
                        </Col>
                        <Col xs={8}>
                            <a target="blank" href={`${movie.homepage}`} className="btn btn-transparant w-100"><i className='fas fa-info-circle'></i> More Information</a>
                        </Col>
                    </Row>
                </div>
                <img src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} className="center-cropped"/>
            </div>
            <div className="p-5">
                <h5 className='text-white'>Description</h5>
                <p className="text-justify text-white">{movie.overview}</p>
                <MoviePopular/>
                <MovieContinue/>
                <MovieAgenda/>
                <MovieOriginal/>
            </div>
            <Footer/>
        </div>
    )
}

export default Movie;
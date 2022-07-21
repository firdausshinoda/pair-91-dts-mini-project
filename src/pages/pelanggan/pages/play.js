import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import tmbd from "../../../apis/tmbd";
import NavBar from "../component/navbar";
import './../../../css/costume-ui.css'
import './../css/play.css'
import Footer from "../component/footer";
import MoviePopular from "../component/movie_popular";
import MovieContinue from "../component/movie_continue";
import MovieAgenda from "../component/movie_agenda";
import MovieOriginal from "../component/movie_original";

const Play = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])
    const [srcURL, setsrcURL] = useState([])
    const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original"

    const fetcVideo = async() => {
        try {
            const response = await tmbd.get('movie/'+param.id+"/videos")
            const urlYoutube = "https://www.youtube.com/embed/"
            setsrcURL(urlYoutube+response.data.results[0].key)
        } catch (error) {
            console.log(error);
        }
    }
    const fetcDetail = async() => {
        try {
            const response = await tmbd.get('movie/'+param.id);
            setMovie(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetcVideo()
        fetcDetail()
    },[])

    return (
        <div className='bg-dop'>
            <NavBar/>
            <div className="controller-play">
                <iframe
                    name="myBook"
                    src={srcURL}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen={true}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
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

export default Play
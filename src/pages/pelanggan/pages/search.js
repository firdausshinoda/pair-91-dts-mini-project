import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import tmbd from "../../../apis/tmbd";
import Footer from "../component/footer";
import NavBar from "../component/navbar";
import './../css/search.css';

const Search = () => {
    const [movies, setMovies] = useState([])
    const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
    const fetchData = async(search) => {
        if (search!=="") {
            try {
                const response = await tmbd.get('search/movie?query='+search);
                setMovies(response.data.results)
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const response = await tmbd.get('trending/movie/week');
                setMovies(response.data.results)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const search = data.get('search');
        fetchData(search)
    };

    useEffect(()=> {
        fetchData("")
    },[])

    return (
        <div className="bg-dop">
            <NavBar/>
            <div style={{marginTop:'60px'}}>
                <Row className="w-100 pt-5">
                    <Col xs={12} sm={6} md={4} className="m-sm-auto m-md-auto">
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        name="search"
                        id="search"
                        aria-label="Search"/>
                        <Button type="submit" variant="outline-light">Search</Button>
                    </Form>
                    </Col>
                </Row>
                <Row className="w-100 p-5">
                    {movies.map((movie, i) => {
                        return (
                            <Col xs={12} sm={6} md={3} className="mb-4">
                                <Link to={"/movie/"+movie.id} className="text-decoration-none text-black">
                                    <Card className="card-search">
                                        <Card.Img className='center-cropped' style={{height:'30vh'}} src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt="Logo"/>
                                        <Card.Body>
                                            <h6>{movie.title}</h6>
                                            <p>{movie.overview}</p>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <Footer/>
        </div>
    )
}

export default Search;
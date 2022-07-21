import './registrasi.css';
import './../../css/costume-ui.css';
import ImgBgLogin from './../../img/bg-login.jpg';
import ImgLogo from './../../img/logo.png';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { auth } from '../../config/firebase';
import { useNavigate  } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Registrasi = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget)
      const email = data.get('email')
      const password = data.get('password')

      try {
        const { user } = await createUserWithEmailAndPassword(auth,email,password)
        console.log(user)
        navigate('/')
      } catch (error) {
        console.log(error.message)
      }
    }

    return (
      <div className='registrasi-page'>
        <div className='registrasi-wrapper'>
          <div className='registrasi-wrapper-bg'>
            <img src={ImgBgLogin} className='bg-login' alt='Logo'/>
          </div>
        </div>
        <div className='registrasi-header'>
          <Link to='/' className='href-logo'>
            <img src={ImgLogo} alt="LOGO"/>
          </Link>
        </div>
        <div className='registrasi-body'>
          <Form onSubmit={handleSubmit}>
            <Card style={{backgroundColor:'rgba(0,0,0,.75)'}}>
                <Card.Body className='p-5'>
                    <h1><b>Registrasi</b></h1>
                    <Form.Group className='pt-3'>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type='email' name='email' id='email' placeholder='E-mail....'/>
                    </Form.Group>
                    <Form.Group className='pt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' id='password' placeholder='Password....'/>
                    </Form.Group>
                    <div className='d-grid gap-1 pt-3'>
                        <Button type='submit' className='btn btn-danger'>REGISTRASI</Button>
                    </div>
                    <Row className='py-5'>
                        <Col xs={12}>
                            <Link to='/' className='text-white float-end'>Login</Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
          </Form>
        </div>
      </div>
    );
  }
  
  export default Registrasi;
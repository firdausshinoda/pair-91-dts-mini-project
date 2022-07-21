import './login.css';
import './../../css/costume-ui.css';
import ImgBgLogin from './../../img/bg-login.jpg';
import ImgLogo from './../../img/logo.png';
import LogoGoogle from './../../img/001-google.png';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, providerGmail, signInWithPopup } from '../../config/firebase';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get('email');
      const password = data.get('password');

      try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/home");
      } catch (error) {
          console.log(error.message);
      }
    };

    const signInGmail = async () => {
      try {
          await signInWithPopup(auth, providerGmail);
          navigate("/home");
      } catch (error) {
          console.log(error.message);
      }
    }

    return (
      <div className='login-page'>
        <div className='login-wrapper'>
          <div className='login-wrapper-bg'>
            <img src={ImgBgLogin} className='bg-login' alt='Logo'/>
          </div>
        </div>
        <div className='login-header'>
          <Link to='/' className='href-logo'>
            <img src={ImgLogo} alt="LOGO"/>
          </Link>
        </div>
        <div className='login-body'>
          <Form onSubmit={handleSubmit}>
            <Card style={{backgroundColor:'rgba(0,0,0,.75)'}}>
                <Card.Body className='p-5'>
                    <h1><b>Sign In</b></h1>
                    <Form.Group className='pt-3'>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type='email' name='email' id='email' placeholder='E-mail....'/>
                    </Form.Group>
                    <Form.Group className='pt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' id='password' placeholder='Password....'/>
                    </Form.Group>
                    <div className='d-grid gap-1 pt-3'>
                        <Button type='submit' className='btn btn-danger'>MASUK</Button>
                    </div>
                    <div className='pt-3'>
                      <Row>
                        <Col xs={12}>
                          <p className='text-center'>atau dengan</p>
                        </Col>
                        <Col xs={12}>
                          <Button type='button' onClick={signInGmail} className='btn-light w-100'><img src={LogoGoogle} style={{width:"20px"}} alt="Logo"/> Google</Button>
                        </Col>
                      </Row>
                      <Row className='pt-3'>
                        <Col xs={6}>
                            <Form.Check type='checkbox' label="Ingatkan saya"/>
                        </Col>
                        <Col xs={6}>
                            <Link to='/registrasi' className='text-white float-end'>Registrasi</Link>
                        </Col>
                      </Row>
                    </div>
                </Card.Body>
            </Card>
          </Form>
        </div>
      </div>
    );
  }
  
  export default Login;
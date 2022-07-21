import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import ImgLogo from './.../../../../../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../config/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Navbar collapseOnSelect bg="black" variant='dark' expand='lg' fixed='top' style={{backgroundColor:'#000000'}}>
            <Container>
                <Link to='/'>
                    <img src={ImgLogo} alt="LOGO" className='w-25'/>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Link to='/home' className='nav-link'>Home</Link>
                        <a className='nav-link'>Series</a>
                        <a to='/movies' className='nav-link'>Movies</a>
                        <a to='/new_popular' className='nav-link'>New And Popular</a>
                        <a to='/my_list' className='nav-link'>My List</a>
                    </Nav>
                    <Nav>
                        <Link to='/search' className='nav-link'><i className='fas fa-search'></i></Link>
                        <a to='/account' className='nav-link'>{user.email}</a>
                        <a to='/gift' className='nav-link'><i className='fas fa-gift'></i></a>
                        <a to='/notification' className='nav-link'><i className='fas fa-bell'></i></a>
                        <a to='/account' className='nav-link'><i className='fas fa-user'></i></a>
                        <Link to='/logout' className='nav-link' onClick={onLogout}><i className='fas fa-sign-out-alt'></i></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
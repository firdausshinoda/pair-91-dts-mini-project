import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Registrasi from './pages/registrasi/registrasi';
import Home from './pages/pelanggan/pages/home';
import Movie from './pages/pelanggan/pages/movie';
import Play from './pages/pelanggan/pages/play';
import ProtectedRoute from './config/ProtectedRoute';
import Search from './pages/pelanggan/pages/search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>}/>
        <Route path='/registrasi' element={
            <ProtectedRoute loginOnly={false}>
              <Registrasi />
            </ProtectedRoute>}/>
        <Route path='/home' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>}/>
        <Route path='/movie/:id' element={
            <ProtectedRoute>
              <Movie />
            </ProtectedRoute>}/>
        <Route path='/play/:id' element={
            <ProtectedRoute>
              <Play />
            </ProtectedRoute>}/>
        <Route path='/search' element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Registration from './pages/Registration';
import Login from './pages/Login';


function App() {

  return (
    <div className='App'>
      <Router>
        <div className='navbar'>
        <Link to="createpost">Create a Post</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Signup</Link>
        </div>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/createpost' exact Component={CreatePost} />
          <Route path='/post/:id' exact Component={Post} />
          <Route path='/register' exact Component={Registration} />
          <Route path='/login' exact Component={Login} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;

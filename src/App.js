import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Home from './screens/Home';
import Login from './screens/Login'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Signup from './screens/Signup';
function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Routes>
        </div>
      </Router>
  
  );
}

export default App;
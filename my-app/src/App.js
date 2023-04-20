import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Index from './page/Index';
import Add from './page/Add';
import Register from './page/Register';
import Signin from './page/Signin';


function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route index element={<Index/>} />
        <Route path="/add" element={<Add />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

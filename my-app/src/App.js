import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Index from './page/Index';
import Add from './page/Add';


function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route index element={<Index/>} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

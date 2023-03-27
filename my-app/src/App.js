import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Content from './component/Content';
import Control from './component/Control';


function App() {
  return (
    <>
    <div className="container mt-5">
      <h2 className='ms-3 text-center mb-5'>TODO List</h2>
        <Control />
        <Content />
    </div>
    </>
  );
}

export default App;

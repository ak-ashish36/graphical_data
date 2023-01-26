import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Homepage from './components/Homepage';
import Sidebar from './components/Sidebar';
import Graph
 from './components/Graph';
function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Sidebar/>
        <div className='main-container'>
          <Routes>
            <Route exact path='/' element={<Homepage/>}></Route>
            <Route exact path='/plus01' element={<Graph/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;

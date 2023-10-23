import './App.css';
import {BrowserRouter as Router , Route, Routes, Link} from 'react-router-dom';
import Header from './components/Header/Header'
import Contekst from './components/Contekst/Contekst';
import Basis from './components/Basis/Basis';
import Estetika from './components/Estetika/Estetika';
import Nearfooter from './components/Nearfooter/Nearfooter';
import Interesting from './components/Interesting/Interesting';

function App() {
  return (
   <div style={{display:"flex", width: "100%",justifyContent:"center", flexDirection: "column", alignItems: "center"}} >
    <Header />
    <Contekst />
    <Basis />
    <Estetika />
    <Nearfooter />
    <Interesting />
   </div>



  // <div style={{display:"flex", width: "100%",justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
  // <Router>
  // {/* <div className='navbar'>
  // <Link to="/createpost">Create A Post</Link>
  // <Link to="/">Home Page</Link>
  // <Link to="/registration">Registration</Link>
  // <Link to="/login">Login</Link>
  // </div> */}
  // <Routes>
  // <Route path="/" element={<Header />}/>
  // <Route path="/contekst" element={<Contekst />}/>
  // </Routes>
  // </Router>
  // </div>
  );
}

export default App;

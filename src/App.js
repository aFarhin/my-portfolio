import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Works from './components/Works/Works';
// import Header from './components/Header';

function App() {
  return (
    // <> <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/project' element={<Projects />}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    // </>
  );
}

export default App;

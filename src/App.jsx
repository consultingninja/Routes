import './App.css'
import {HashRouter,Routes,Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import NotHome from './NotHome';
import AlsoNotHome from './AlsoNotHome';
import ReScroll from './ReScroll';

function App() {


  return (
    <HashRouter>
      <Nav />
      <ReScroll>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/nothome' exact element={<NotHome />} />
        <Route path='/alsonothome' exact element={<AlsoNotHome />} />
      </Routes>
      </ReScroll>
      <Nav />
    
    </HashRouter>
  )
}

export default App


import './App.css'
import { Route, Routes  } from 'react-router'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Project from './Pages/Project.jsx'
import Avlisting from './Pages/Avlisting.jsx'
import Whyus from './Pages/Whyus.jsx'
import Gallery from './Pages/Gallery.jsx'
import Testimonals from './Pages/Testimonials.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Toolbar from '@mui/material/Toolbar'
import WhatsaapIcon from './Components/WhatsaapIcon'


// All Pages

function App() {
  
  return (
    <div className='App'>
     <Navbar/>
     <Toolbar/>
   
     <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/listing" element={<Avlisting />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonals />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <WhatsaapIcon/>
    </div>
  )
}

export default App

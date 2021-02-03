import { Route } from 'react-router-dom'
import NavBar from './app/components/Navbar.js'
import Footer from './app/components/Footer.js'
import Home from './app/components/Home.js'
import About from './app/components/AboutMe.js'
import Contact from './app/components/ContactPage.js'
import Work from './app/components/Work.js'
import './App.css';

function App() {
  return (
    < >
      <NavBar />
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
      <Route path='/work' component={Work} />
      <Route path='/contact' component={Contact} /> 

      <Footer />
    </>
  );
}

export default App;

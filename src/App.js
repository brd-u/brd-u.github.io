import { Route } from 'react-router-dom'
import NavBar from './app/components/js/Navbar.js'
import Footer from './app/components/js/Footer.js'
import Home from './app/components/js/Home.js'
import About from './app/components/js/AboutMe.js'
import Contact from './app/components/js/ContactPage.js'
import Work from './app/components/js/Work.js'


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

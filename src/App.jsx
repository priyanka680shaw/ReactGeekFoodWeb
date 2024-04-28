
import { Navbar } from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Home } from './Pages/HomePage/Home/Home'

function App() {
  return (
    <>
    <header style={{position :"fixed", width:"100%", zIndex :"100"}}>
    <Navbar/>
    </header>
    <main>
        <Home/>
    </main>
     <Footer/>
    </>
  )
}

export default App

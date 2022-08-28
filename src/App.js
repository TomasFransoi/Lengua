import {BrowserRouter,Route,Routes} from "react-router-dom"
import Personajes from './Components/Personajes/Personajes';
import './App.css';
import Navbar from "./Components/NavBar/NavBar"
import PersonajeDetailContainer from "./Components/PersonajeDetailContainer/PersonajeDetailContainer"
import Inicio from "./Components/Inicio/Inicio";
import Lugares from "./Components/Lugares/Lugares.js";
import Footer from "./Components/Footer/Footer.js"
import Trama from "./Components/Trama/Trama.js"
import Prologo from "./Components/Prologo/Prologo";
function App() {
  return (
    <div className="App">
            <BrowserRouter>
            <Navbar />
                    <Routes>
                    <Route exact path='/' element={<Inicio/>}/>
                    <Route exact path='/Personajes' element={<Personajes/>} />
                    <Route exact path='/Lugares' element={<Lugares/>} />  
                    <Route exact path='/Trama' element={<Trama/>} />
                    <Route exact path='/detail/:productId' element={<PersonajeDetailContainer />} />
                    <Route exact path='/Prologo' element={<Prologo/>} /> 
                </Routes>
            <Footer/>
            </BrowserRouter>
    </div>
  );
}

export default App;

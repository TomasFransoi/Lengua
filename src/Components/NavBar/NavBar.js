import "./NavBar.css"
import {Link } from "react-router-dom"
const Navbar = () =>{
    return(
        <div className="nav">
        <h1>El Hombre Ilustrado</h1>
        <h2>Prólogo</h2>
        <nav>
            <div className='opciones'>
                <Link to='/' className="Opcion"><button>Inicio</button></Link>
                <Link to='/Personajes' className="Opcion"><button>Personajes</button></Link>
                <Link to='/Lugares' className="Opcion"><button>Espacio y Tiempo</button></Link>
                <Link to='/Trama' className="Opcion"><button>Trama</button></Link>
                <Link to="Prologo"><button>Prologo</button></Link>
            </div>

        </nav>
        </div>
    )
}
export default Navbar
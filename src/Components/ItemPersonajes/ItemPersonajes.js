import { Link } from 'react-router-dom'

const ItemPersonajes = ({id, name, img,}) => {
   
    return (
        <article className="objeto">
            <header >
                <h2 >
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="imagenDelObjeto"/>
            </picture>         
            <footer>
                <Link to={`/detail/${id}`} className='opcion'><button>Informacion</button></Link>
            </footer>
        </article>
    )
}

export default ItemPersonajes
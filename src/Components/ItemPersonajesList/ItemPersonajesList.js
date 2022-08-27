import ItemPersonajes from "../ItemPersonajes/ItemPersonajes"


const ItemPersonajesList = ({Personajes}) => {
    return(
        <div className='ListaDeObjetos'>
            {Personajes.map(prod => <ItemPersonajes key={prod.id} {...prod}/>)}
        </div>      
    )
}

export default ItemPersonajesList
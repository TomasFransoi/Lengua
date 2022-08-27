import { useState, useEffect} from 'react'
import { getPersonajesById } from '../../asincMock'
import PersonajeDetail from "../PersonajeDetail/PersonajeDetail.js"
import { useParams } from 'react-router-dom'

const PersonajeDetailContainer = () => {
    const [Personaje, setPersonaje] = useState()

    const { productId } = useParams()
    useEffect(() => {
        getPersonajesById(productId)
            .then(Personaje => {
                setPersonaje(Personaje)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <div>
            <PersonajeDetail {...Personaje}/>
        </div>
    )
}

export default PersonajeDetailContainer
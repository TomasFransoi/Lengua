import { getPersonajes } from "../../asincMock"
import { useParams } from 'react-router-dom'
import { useEffect,useState } from "react"
import ItemPersonajesList from "../ItemPersonajesList/ItemPersonajesList"
const Personajes = () =>{
    const [Personajes, setPersonajes] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = getPersonajes
        asyncFunction(categoryId).then(Personajes => {
            setPersonajes(Personajes)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])
    return (
        <>
            <h1>Personajes</h1>
            <ItemPersonajesList Personajes={Personajes}/>
        </>
    )
}
export default Personajes
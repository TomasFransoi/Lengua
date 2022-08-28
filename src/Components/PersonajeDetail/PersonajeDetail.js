import "./PersonajeDetail.css"
const PersonajeDetail = ({ name,edad,vivienda,trabajo,caracteristicasCorporales,caracteristica,img }) => {
    return (
        <>
                    <h1>{name}</h1>
        <section >
            <picture>
                <img src={img} alt={name} className="imagenDelObjeto"/>
            </picture>  
            <article>
                <h3>EDAD</h3>
                <p>{edad}</p>
            </article>
            <article>
                <h3>VIVIENDA</h3>
                <p>{vivienda}</p>
            </article>
            <article>
                <h3>TRABAJO</h3>
                <p>{trabajo}</p>
            </article>
            <article>
                <h3>CARACTERISTICAS CORPORALES</h3>
                <p>{caracteristicasCorporales}</p>
            </article>
            <article>
                <h3>CARACTERISTICA</h3>
                <p>{caracteristica}</p>
            </article>
        </section>
        </>
        
    )
}

export default PersonajeDetail
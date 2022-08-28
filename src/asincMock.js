const Personajes = [
    {id:"1", name:"Bruja" ,edad:"100 años en un momento al otro no mas de 20",vivienda:"casita en el interior de wisconsin",trabajo:"Hacia Ilustraciones",caracteristicasCorporales:"sin informacion",caracteristica:"podia viajar en el tiempo",img:"../images/Bruja.jpeg"},
    {id:"2", name:"Hombre Ilustrado" ,edad:"Aprocimadamente 60 Años",vivienda:"Sin vivienda",trabajo:"sin trabajo por 40 años pero trabajaba en un parque de diversiones",caracteristicasCorporales:"alto,brazos largos,manos anchas,rostro infantil, cuerpo maciso",caracteristica:"Lleno de ilustraciones(18)", img:"../images/HombreIlustrado.jpeg"},
    {id:"3", name:"Hombre Sin Nombre" ,edad:"sin informacion",vivienda:"sin informacion",trabajo:"sin informacion",caracteristicasCorporales:"sin informacion",caracteristica:"sin informacion",img:""}
]
export const getPersonajes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Personajes)
        },)
    })
}
export const getPersonajesById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Personajes.find(prod => prod.id === id))
        },)
    })
}
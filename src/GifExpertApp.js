import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  //const categorias =["Apertura Española","Apertura Italiana"]
  const [categorias, setCategorias] = useState(["rick and morty"])
  const handleApp= (item)=> {
    
    setCategorias([item,...categorias])
  }
  return (
    <> 
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias}/>
    <hr/>
    <button onClick={handleApp}> Agregar </button>
      <ol>
        {
          categorias.map( (categoria) => 
            <GifGrid 
            key={categoria}
            categoria={categoria}/>
          )
        }
      </ol>   
    </>
  )
}

export default GifExpertApp
import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem'

const GifGrid = ({categoria}) => {
  const {loading,data:images} = useFetchGif(categoria);



  return (
      <>
        <h3> {categoria}</h3>
        {loading&&<p className='animate__animated animate__flash'>loading</p>}
       {  <div className='card-grid'> 
            {images.map( (img) => <GifGridItem 
                key={img.id}
                {...img}/>)}
        </div> }
      
      </>
   
  )
}

export default GifGrid
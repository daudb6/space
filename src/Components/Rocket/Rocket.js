import React, { useState } from 'react'
import "./Rocket.css"

export const Rocket = () => {
const [data,setData] = useState(null)
const fetchData = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/rockets")
   setData (await response.json())
  console.log(data)


}
fetchData();

  return (
    <>
   {!data?  <p>loading....</p> : (
    <>
    {data.map((e) => {
      return(
        
        <div className='rocket'>
      <div className='rocket-img'>
      <img src={e.flickr_images[1]}></img>
      </div>
      <div className='details'>
        <div className='heading'>
          <h3>{e.name}</h3>
          <p>{e.description}</p>
        </div>
        <div className='btn'>
          <button type='button'>Reserve Rocket</button>
        </div>
      </div>
    </div>

      )
    })}
    
    </>

   )}
    

</>  
  )

}



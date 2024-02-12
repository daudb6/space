import React from 'react'
import "./Rocket.css"

export const Rocket = () => {
  return (
    <div className='rocket'>
      <div className='rocket-img'>
      <img src='rocket.jpg'></img>
      </div>
      <div className='details'>
        <div className='heading'>
          <h3>Falcon 1</h3>
          <p>The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</p>
        </div>
        <div className='btn'>
          <button type='button'>Reserve Rocket</button>
        </div>
      </div>
    </div>
  )
}

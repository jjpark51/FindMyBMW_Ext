import React from 'react'
import '../static/pref.scss'


function Preference() {
  return (
    <div>
        <div className='pref-title'>What is most important to you?</div>
        <div className='rank-wrapper'>
            <div className='ranking'><a>1st</a></div>
            <div className='ranking'><a>2nd</a></div>
            <div className='ranking'><a>3rd</a></div>
        </div>
        <div className='pref-choices'>
            <div className='choice'><a>Safety</a></div>
            <div className='choice'><a>Maintenance Cost</a></div>
            <div className='choice'><a>Image</a></div>
            <div className='choice'><a>Fuel Efficiency</a></div>
            <div className='choice'><a>Ride Comfort</a></div>
            <div className='choice'><a>Design</a></div>
        </div>
    </div>
  )
}

export default Preference
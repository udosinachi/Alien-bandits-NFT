import React from 'react'
import { Auto } from './Style'

const AutoSlider = () => {
  var sliding = document.getElementById('sliding')
  sliding.scrollTop = sliding.scrollHeight
  // sliding.scrollTop = sliding.scrollLeft - 300

  return (
    <div>
      <Auto>
        <div id='sliding'>
          <div className='img-div'>
            <img src='/images/pharoh.png' alt='slide' />
            <img src='/images/pharoh.png' alt='slide' />
            <img src='/images/pharoh.png' alt='slide' />
            <img src='/images/pharoh.png' alt='slide' />
            <img src='/images/pharoh.png' alt='slide' />
            <img src='/images/pharoh.png' alt='slide' />
            <img src='/images/pharoh.png' alt='slide' />
          </div>
        </div>
      </Auto>
    </div>
  )
}

export default AutoSlider

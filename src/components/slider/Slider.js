import React from 'react'
import { Slid } from './Style'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Slider = () => {
  const rightSlide = () => {
    var sliding = document.getElementById('sliding')
    sliding.scrollLeft = sliding.scrollLeft + 300
  }
  const leftSlide = () => {
    var sliding = document.getElementById('sliding')
    sliding.scrollLeft = sliding.scrollLeft - 300
  }
  return (
    <div>
      <Slid>
        <div className='slid-div'>
          <MdChevronLeft
            size={40}
            className='MdChevronLeft'
            onClick={leftSlide}
          />
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

          <MdChevronRight
            size={40}
            className='MdChevronRight'
            onClick={rightSlide}
          />
        </div>
      </Slid>
    </div>
  )
}

export default Slider

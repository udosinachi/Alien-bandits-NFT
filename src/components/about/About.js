import React from 'react'
import { Aboutt } from './Style'

const About = () => {
  return (
    <div>
      <Aboutt>
        <div className='about-div'>
          <h3>About the project</h3>
          <p>
            Haze Monkey Society is an NFT collection aimed at empowering NFT
            creators and artists by collaboratively building a no-code platform
            whilst encouraging climate consciousness and offsetting carbon
            footprint through tree planting.
            <br />
            <br />
            <br />
            We are also making a community-driven animation series, where the
            holders will vote and get rewarded for participating in the
            production process.
            <br />
            <br />
            <br />
            In line with United Nations Sustainable Development Goals, Haze
            Monkey Society is planting over 420,000 trees over the next 5years
            by collaborating with the community, experts, and existing green
            organizations to make this possible.
          </p>
        </div>
        <div className='video-div'>
          <video src='/video/hazemonkeys.mp4' alt='test' />
        </div>
      </Aboutt>
    </div>
  )
}

export default About

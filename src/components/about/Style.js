import styled from 'styled-components'

export const Aboutt = styled.div`
  /* border: 3px solid green; */
  .about-div {
    /* border: 3px solid blue; */
    width: 50%;
    margin: auto;
    text-align: center;
    padding-top: 70px;
    @media (max-width: 1300px) {
      width: 70%;
    }
    @media (max-width: 700px) {
      width: 90%;
    }
    h3 {
      font-size: 4.5rem;
      width: 80%;
      margin: auto;
      /* border: 1px solid pink; */
      line-height: 80px;
      @media (max-width: 1300px) {
        width: 60%;
      }
      @media (max-width: 1200px) {
        width: 40%;
      }
      @media (max-width: 1000px) {
        width: 70%;
        font-size: 2.5rem;
      }
      @media (max-width: 850px) {
        width: 40%;
        line-height: 50px;
      }
      @media (max-width: 700px) {
        width: 70%;
      }
    }
    p {
      font-size: 1.3rem;
      @media (max-width: 1000px) {
        font-size: 1rem;
      }
    }
  }

  .video-div {
    /* border: 3px solid blue; */
    width: 70%;
    margin: auto;
    padding: 50px 0;
    @media (max-width: 700px) {
      width: 90%;
    }
    video {
      border-radius: 0.5rem;
      width: 100%;
      height: auto;
      display: block;
      margin: auto;
    }
  }
`

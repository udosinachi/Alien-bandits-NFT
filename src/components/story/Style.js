import styled from 'styled-components'

export const Tell = styled.div`
  /* border: 3px solid green; */
  .story-div {
    /* border: 3px solid blue; */
    width: 85%;
    display: flex;
    margin: auto;
    @media (max-width: 1250px) {
      display: block;
      width: 90%;
      margin: 0 30px;
    }
    .head {
      width: 40%;
      /* border: 3px solid red; */
      @media (max-width: 1250px) {
        width: 50%;
        margin-bottom: 50px;
      }
      h3 {
        font-size: 1rem;
        font-weight: 600;
        color: grey;
        text-transform: uppercase;
        filter: brightness(61%);
        padding: 0;
        margin: 0;
        @media (max-width: 500px) {
          font-size: 0.8rem;
        }
      }
      h2 {
        font-size: 4.5rem;
        font-weight: 400;
        padding: 0;
        margin: 0;
        line-height: 70px;
        @media (max-width: 1250px) {
          font-size: 3rem;
          line-height: 50px;
        }
      }
    }
    .head2 {
      width: 60%;
      /* border: 3px solid orange; */
      @media (max-width: 1250px) {
        width: 80%;
      }
      @media (max-width: 770px) {
        width: 100%;
      }
      p {
        font-size: 1.125rem;
        font-weight: 400;
      }
    }
  }
`

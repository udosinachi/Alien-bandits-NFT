import styled from 'styled-components'

export const Head = styled.div`
  /* border: 3px solid red; */
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden;
  .sub-div {
    text-align: center;
    .center-div {
      width: 50%;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      /* border: 3px solid green; */
      @media (max-width: 1200px) {
        transform: scale(0.9);
        width: 55%;
      }
      @media (max-width: 1100px) {
        margin: auto;
      }
      @media (max-width: 850px) {
        width: 60%;
      }
      @media (max-width: 850px) {
        width: 100%;
      }
      .text-div {
        /* border: 3px solid purple; */
        margin: 2rem 0;
        .h3-div {
          /* border: 3px solid brown; */
          @media (max-width: 1200px) {
            width: 65%;
            margin: auto;
          }
          h3 {
            display: inline-block;
            line-height: 80px;
            font-size: 5rem;
            font-weight: 900;
            color: red;
            width: 100%;
            padding: 0;
            margin: 0;
          }
        }
        img {
          width: 100px;
          padding: 0;
          margin: 0;
        }
        p {
          font-size: 1.5rem;
          font-weight: 400;
          color: red;
          padding: 0;
          margin: 0;
          /* border: 3px solid yellow; */
        }
      }
      .form-div {
        /* border: 3px solid blue; */
        width: 50%;
        margin: auto;
        @media (max-width: 850px) {
          width: 100%;
        }
        .span {
          margin: 0;
          text-align: left;
        }
        .minting {
          border: 3px solid black;
          background: white;
          border-radius: 6px;
          height: 61px;
          display: flex;
          justify-content: center;
          input {
            text-align: center;
            font-size: 20px;
            width: 70%;
            border: none;
            outline: none;
          }
          .butt {
            width: 40px;
            font-size: 24px;
            font-weight: 500;
            border: none;
            outline: none;
            background: white;
          }
        }
        .mint-button {
          border-radius: 6px;
          border: 3px solid black;
          width: 100%;
          height: 61px;
          margin-top: 10px;
          font-size: medium;
        }
      }
    }
  }
`

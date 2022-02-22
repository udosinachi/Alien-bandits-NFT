import styled from 'styled-components'

export const Nav = styled.div`
  background: black;
  opacity: 0.9;
  .bar {
    /* border: 3px solid red; */
    background: black;
    opacity: 0.9;
    box-shadow: none;
    width: 90%;
    margin: auto;
  }
  img {
    width: 60px;
  }
  .button-div {
    display: flex;
    justify-content: center;
    button {
      border-radius: 12px;
      width: 151.39px;
      height: 51px;
      border: 3px solid red;
      margin: 0 10px;
    }
    .discord {
      width: 40px;
      margin: 0 10px;
    }
  }
`

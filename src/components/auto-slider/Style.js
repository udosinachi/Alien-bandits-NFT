import styled from 'styled-components'

export const Auto = styled.div`
  border: 3px solid red;

  #sliding {
    position: relative;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
    animation-iteration-count: infinite;
    /* transform: rotate(-90deg) translateY(-100px);
    transform-origin: right top; */
    ::-webkit-scrollbar {
      display: none;
    }
    .img-div {
      display: flex;
      position: relative;
      min-width: 300px;
      max-width: 300px;
      transform: translate3d(0px, 0px, 0px);
      img {
        max-width: 100%;
        height: auto;
        border-style: solid;
      }
    }
  }
`

import styled from 'styled-components'

export const Slid = styled.div`
  position: relative;
  /* border: 3px solid red; */
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  .slid-div {
    /* border: 3px solid blue; */
    /* margin: 10px 0; */
    overflow: hidden;

    #sliding {
      position: relative;
      overflow-y: hidden;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-behavior: smooth;
      animation-iteration-count: infinite;
      ::-webkit-scrollbar {
        display: none;
      }
      .img-div {
        display: flex;
        position: relative;
        min-width: 265.143px;
        max-width: 265.143px;
        transform: translate3d(0px, 0px, 0px);
        img {
          max-width: 100%;
          height: auto;
          border-style: solid;
        }
      }
    }

    .MdChevronLeft {
      background: white;
      border-radius: 100%;
      position: absolute;
      left: 0;
      top: 50%;
      opacity: 0.5;
      box-shadow: 2px 2px 2px 2px rgba(0 0 0 / 12%);
      z-index: 1;
      color: black;
    }
    .MdChevronLeft:hover {
      opacity: 1;
      cursor: pointer;
    }
    .MdChevronRight {
      background: white;
      border-radius: 100%;
      position: absolute;
      right: 0;
      top: 50%;
      opacity: 0.5;
      box-shadow: 2px 2px 2px 2px rgba(0 0 0 / 12%);
      color: black;
    }
    .MdChevronRight:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`

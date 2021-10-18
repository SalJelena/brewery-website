import styled, { keyframes } from "styled-components";

const StyledBeers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0;
  text-align: center;
  margin-bottom: 40px;

    > div:hover{
      background-image: url('https://res.cloudinary.com/dwrla4d2s/image/upload/v1634220167/final_project/back4__4_-removebg-preview_1_cpaa68.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 330px;
    }
    img:hover{
      transform: scale(1.1);     
    }
    h3:hover{
      color: #393e46;
    }  
`

export default StyledBeers


import styled from "styled-components";



const StyledBeer = styled.div`
    text-align: center;
    margin: 0 150px;
    margin-bottom: 40px;
    display: grid; 
    grid-template-columns: 1.8fr 1.5fr; 
    grid-template-rows: 0.5fr 0fr 0fr; 
    gap: 0px 10px; 
    grid-template-areas: 
        ". ."
        ". ."
        ". ."; 
    align-content: space-around; 
    justify-items: center;

    .beer__information{
        padding: 25px;
        /* background-color: #f7f7f7; */
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        width: 700px;
    }
    span{
      padding: 20px;
      margin: 5px;
      cursor: pointer;
    }
    span:hover{
      transform: scale(1.2)
    }
    p{
        padding: 20px;
    }
    ul{
        list-style-type: none;
    }

    .beer__image {
    padding-top: 50px;
    background-image: url('https://res.cloudinary.com/dwrla4d2s/image/upload/v1634317973/final_project/back4__5_-removebg-preview_ycvxbv.png');
    background-repeat: no-repeat;
  }

  
button {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

button:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .button-52 {
    padding: 13px 50px 13px;
  }
}

    
`

export default StyledBeer
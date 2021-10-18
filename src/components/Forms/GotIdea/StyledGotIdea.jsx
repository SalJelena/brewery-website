import styled, { keyframes } from "styled-components";

const bounce = keyframes`
0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`

const StyledGotIdea = styled.div`
  width: 500px;
  text-align: center;


h2{
    font-size: 40px;
}
p{
  animation: ${bounce} 5s infinite both;
}

form {
  margin: 20px;
  background: white;
  padding: 20px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  text-align: center;
  position: relative;
  transition: all 3s ease-in-out;
  display:flex;
  justify-content: space-around;
  flex-direction: column;
  
}

input{
    background-color: #ececec;
    border-radius: 20px;
    border: none;
    padding: 10px;
}
input[type=submit]{
    background-color: black;
    color: white;
    cursor: pointer;
    width: 200px;
    margin-left: 110px;
    
}

textarea {
  height: 50px;
  background-color: #ececec;
  border-radius: 20px;
  border: none;
  padding: 10px;
  resize: none;
}

a {
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    padding: 0.8rem 2.5rem;
    border-radius: 3rem;
    background-color: #FFD700;
    color: #222;
}

`

export default StyledGotIdea
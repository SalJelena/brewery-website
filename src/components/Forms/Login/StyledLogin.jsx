import styled from "styled-components";


const StyledLogin = styled.div`    
  width: 500px;
  text-align: center;

h2{
    font-size: 40px;
}

form {
  margin: 20px;
  background: white;
  padding: 3em;
  height: 320px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  text-align: center;
  position: relative;
  transition: all 3s ease-in-out;
  display:flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  
}

input{
    background-color: white;
    /* border-radius: 20px; */
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    padding: 10px;
}
input[type=submit]{
    background-color: black;
    color: white;
    cursor: pointer;
    width: 200px;
    margin-left: 78px;
    border-radius: 20px;
    
}
input:focus{
  border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
  outline: none;
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

export default StyledLogin
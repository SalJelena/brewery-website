import { useState } from "react"
import { getAllUsers } from "../../../Service"
import { Link, useHistory } from "react-router-dom"
import StyledLogin from "./StyledLogin"
import StyledMainField from "./StyledMainField"


const Login = ({setUser, setUsers}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    const isUserValid = (array) => {
        return (array.find(user => user.password === password && user.username === username))
    }
    

    return(
       
        <StyledMainField>
        
        <StyledLogin>
            <h2>Enter data to login</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    
                    if(username !== '' && password !== ''){
                    getAllUsers().then(res => {
                        setUsers(res.data)
                        // console.log(res.data);
                        let maybeUser = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                        
                        if(maybeUser) {
                            setUser(maybeUser)
                            history.push('/gotidea')
                        }else{
                            console.log('Mistake.');
                        }
                        
                    })
                }
                if(username === '' && password === ''){
                    setError('Morate upisati podatke.')
                }else if(username === ''){
                    setError('Morate upisati username.')
                }else if(password === ''){
                    setError('Morate upisati pass')
                }

                }} >
                    <input type="text" placeholder="Username..." onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                    
                    <input type="password" placeholder="Password..." onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                    <p>{error}</p>
                    <input type="submit" value="Log in" />
                </form>

                    <div>
                        <Link to="/register" >Not registered?</Link>
                    </div>
        </StyledLogin>

        </StyledMainField>
      
    )
}

export default Login
import { useState } from "react"
import { useHistory } from "react-router"
import { getAllUsers, postUser } from "../../../Service"
import { v1 as uuidv1 } from 'uuid'
import StyledRegister from "./StyledRegister"
import StyledMainField from "../Login/StyledMainField"

const Register = ({setUsers}) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()

    const doesItHaveNumber = (str) => {
        return (/\d/.test(str))
    }

    const hasLowerCase = (str) => {
        return (/[A-Z]/.test(str))
    }

    const isValidNewUser = (array) => {
        if(!array.find(user => user.username === username || user.email === email)
        && email.includes('@' && '.')
        && username.length >= 4
        && password.length > 8  
        && doesItHaveNumber(password)
        && hasLowerCase(password)
        ){
            return true
        }
    }

    return(
        <>
        <StyledMainField>
        <StyledRegister>
            <h2>Please enter data to register</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault()

                    getAllUsers().then(res => {
                        setUsers(res.data)

                        if(isValidNewUser(res.data)){
                            let user = {
                                id: uuidv1(),
                                username: username,
                                email: email, 
                                password: password
                            }

                            postUser(user).then(res => {
                                setUsers(prev => [...prev, res.data])
                                //console.log(res.data);
                            })
                            history.push('/gotidea')
                        }else{
                            console.log('Mistake!');
                        }
                    })



                }} >
                    <input type="text" placeholder="Enter username" onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                     <input type="text" placeholder="Enter email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <input type="password" placeholder="Enter password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                    <input type="submit" value="Register" />
                </form>
        </StyledRegister>
        </StyledMainField>
        </>
    )
}

export default Register
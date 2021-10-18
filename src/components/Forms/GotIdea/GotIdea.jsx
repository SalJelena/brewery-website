import { useState } from "react"
import { Redirect, useHistory } from "react-router"
import { v1 as uuidv1 } from 'uuid'
import { postNewBeer } from "../../../Service"
import StyledGotIdea from "./StyledGotIdea"
import StyledMainField from "../Login/StyledMainField"

const GotIdea = ({user, setBeers}) => {

    const [newBeerName, setNewBeerName] = useState('')
    const [newBeerDesc, setNewBeerDesc] = useState('')
    const [newBeerFlavour, setNewBeerFlavour] = useState('')
    const [newFoodPairing, setNewFoodPairing] = useState('')
    const [newBeerImage, setNewBeerImage] = useState('')

    const history = useHistory()

 

    return user ? (
        <StyledMainField>

         <StyledGotIdea> 
         <h2>Got idea for new beer recipe?</h2>
         <p>Submit your idea here!</p>  
            <form onSubmit={(e)=>{
                e.preventDefault()

                let pairings = newFoodPairing.split(',')

                let newBeer = {
                    id: uuidv1(),
                    name: newBeerName,
                    description: newBeerDesc,
                    flavour: newBeerFlavour,
                    food_pairing: pairings,
                    image: newBeerImage
                }

                postNewBeer(newBeer).then(res => {
                    setBeers(prev => [...prev, res.data])
                })

                history.push('/beers')

            }}>
            
                <input type="text" placeholder="Name of beer" onChange={(e)=>{
                    setNewBeerName(e.target.value)
                }} />
                <input type="text" placeholder="Flavour" onChange={(e)=>{
                    setNewBeerFlavour(e.target.value)
                }} />
                <input type="text" placeholder="Food pairings" onChange={(e)=>{
                    setNewFoodPairing(e.target.value)
                }} />
                <input type="text" placeholder="Paste link to the image (if possible, if not, leave blank)" onChange={(e)=>{
                    setNewBeerImage(e.target.value)
                }} />
                <textarea rows="10" cols="30" placeholder="Write your beer recipe here..." onChange={(e) => {
                    setNewBeerDesc(e.target.value)
                }}/>
                <input type="submit" value="new quote" />
            </form>


                </StyledGotIdea>
        </StyledMainField>
    )
    :
    (
        <Redirect to="/login" />
    )
}

export default GotIdea
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getBeerById } from "../../../Service";
import StyledBeer from "../../Beers/Styles/StyledBeer";


const User = ({user}) => {

    // const [beer, setBeer] = useState(null)
    const [favoriteBeer, setFavoriteBeer] = useState(null)



    const history = useHistory()

    // useEffect(()=>{
    //     let mounted = true
        
    //     getBeerById(user?.beer?.id).then(res => {
    //         if(mounted)
    //         setBeer(res.data)
    //         // console.log(res.data);
    //     })
    //     return () => {mounted = false}

    // }, [user?.beer?.id])


    return (
        <>
        <StyledBeer>

            <div className="beer__information" >

            <h1>Your favorite beer recipe is :</h1>
            <h1>{user?.beer.name}</h1>
               
            <p>{user?.beer.description}</p>
            <div>
                <h2>Ideas for food pairings:</h2>
                
                 <ul>{user?.beer.food_pairing.map(p => <li key={p}>{p}</li>)}</ul> 
            </div>
            <h2>Brewer's tips for you:</h2>
            <p>{user?.beer.brewers_tips}</p>
            </div>

            <div className="beer__image" >
             {user?.beer.image ? 
                <img src={user?.beer.image} alt={user.username} /> 
                :
                <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634231280/final_project/Untitled_design__1_-removebg-preview_snxvei.png" alt={user?.beer?.name} />

               }

               <button onClick={()=>{
                   history.push("/gotidea")
               }}>Want to send your beer recipe?</button>
               
            
            </div>



        </StyledBeer>

        <div>
            
        </div>

        </>
    )
}

export default User
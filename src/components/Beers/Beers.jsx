import { useEffect, useState } from "react"
import { getAllBeers } from "../../Service"
import Pagination from "./Pagination"
import Select from "./Select"
import StyledBeers from "./Styles/StyledBeers"
import StyledBtn from "./Styles/StyledBtn"
import StyledInputs from "./Styles/StyledInputs"
import SelectShow from './SelectShow'
import StyledPagination from "./Styles/StyledPagination"
import StyledCategories from "./Styles/StyledCategories"
import StyledMain from "./Styles/StyledMain"



const Beers = ({user, beers, setBeers}) => {

    const [select, setSelect] = useState('')
    const [displayed, setDisplayed] = useState(3)
    const [onPage, setOnPage] = useState([])


    useEffect(() => {
        let mounted = true
        getAllBeers().then(res => {
            if(mounted)
            setBeers(res.data)
            setOnPage(res.data)
            
        })
        return () => {mounted = false}
    },[setBeers])

    useEffect(()=>{
        setOnPage(beers.slice(0, displayed)) 
      },[displayed,beers])


    return (
        <>
        <StyledMain>
        {/* SELECT FOR FLAVOUR */}
        <StyledCategories>
         <StyledInputs>
            <div className="div-select">
                <Select setSelect={setSelect} beers={onPage} type='types of flavours' />
            </div>
        </StyledInputs>

        {/* PAGINATION AND VIEW  */}
        <StyledPagination>
        {/* <SelectShow options={['All', 6]} setDisplayed={setDisplayed} displayed={displayed}/> */}
        
        <Pagination beers={beers} displayed={displayed} setOnPage={setOnPage} />
        </StyledPagination>
        </StyledCategories>
        {/* VIEW OF BEERS SHOWN */}
       
        <StyledBeers>
            
            {onPage.filter(b => b.flavour.startsWith(select)).map(beer => 
            
            <div key={beer.id}> 
            <StyledBtn to={`/beers/${beer.id}`}>
                <h3>{beer.name}</h3>
                <br/>
                <img src={beer.image?beer.image:"https://res.cloudinary.com/dwrla4d2s/image/upload/v1634231280/final_project/Untitled_design__1_-removebg-preview_snxvei.png"} alt={beer.name} width="350px"/> 
            </StyledBtn> 
            
            </div>

            
            ) }


    </StyledBeers>
    </StyledMain>
        </>
    )
   
}

export default Beers
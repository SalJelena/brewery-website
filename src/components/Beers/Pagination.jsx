import { useState } from "react";
import { useEffect } from "react";
import StyledButtons from "./Styles/StyledButtons";
import StyledButtonsSection from './Styles/StyledButtonsSection'
import StyledPages from "./Styles/StyledPages";


const Pagination = ({beers, displayed, setOnPage}) => {

    let length = beers.length
    let numberOfPages = Math.ceil(length / displayed)

    const [pages, setPages] = useState([])
    const [currPage, setCurrPage] = useState(1)

    const changePage = (page) => {
        setCurrPage(page)
        let start = displayed * (page - 1)
        let end = start + Number(displayed)
        setOnPage(beers.slice(start, end))
    }


    useEffect(() => {
        let tmp = []
        for(let i=1; i<=numberOfPages; i++){
            tmp.push(i)
        }
    
        setPages(tmp)
    },[displayed,numberOfPages])


    return (
        <>
        {
            displayed <= 6 ?

            <StyledButtonsSection>
            <StyledButtons disabled={currPage <= 1} className="button-back" onClick={()=>{
            changePage(currPage -1)
            }}><img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634316245/final_project/left-arrow-removebg-preview_po6ak6.png" alt="arr" width="25px"></img></StyledButtons>

             {pages.map(page => <StyledPages key={page} style={page == currPage?{color:'#efd510'}:{}} onClick={()=>{changePage(page)}}>{page}</StyledPages>)} 

            <StyledButtons disabled={currPage >= pages.length} className="button-next"  onClick={()=>{changePage(currPage + 1)}}><img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634314981/final_project/right-arrow-removebg-preview_oritl2.png" alt="arr" width="25px"></img></StyledButtons>
            </StyledButtonsSection>

            :

            <div></div>

        }


        </>
    )
}

export default Pagination
import Option from "./Options"

const Select = ({setSelect, beers}) => {
    
    let flavourType = [...new Set(beers.map(beer => beer.flavour))]

    return (
        <div>
            <select onChange={(e)=>{
                setSelect(e.target.value)
            }} >
                <option value='' defaultValue>All flavours</option>
                {flavourType.map(opt => <Option key={opt} opt={opt} />)}
            </select>
        </div>
    )
}

export default Select
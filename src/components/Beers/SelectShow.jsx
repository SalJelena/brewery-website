import StyledButtonsSection from "./Styles/StyledButtonsSection";
import StyledSelectShow from "./Styles/StyledSelectShow";

const Select = ({options,displayed,setDisplayed}) => {

    return ( 
        <StyledButtonsSection>
        <span>Per page:</span><StyledSelectShow value={displayed} onChange={(e)=>{
            setDisplayed(e.target.value)
        }}>
            {[...(new Set(options))].map(option => <option key={option} value={option}>{option}</option>)}
        </StyledSelectShow>
        </StyledButtonsSection>
     );
}
 
export default Select;
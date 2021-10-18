import StyledFooter from "./StyledFooter"



const Footer = () => {
    return (
        <StyledFooter>
            <div>
            <ul className="footer-nav">
                <li className="footer-item"><a href="https://www.instagram.com/" target="_blank"  rel="noreferrer">
                <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634133501/final_project/instagram_2_ou4nyf.png" alt="iconinsta" /></a>
                </li>
                <li className="footer-item"><a href="https://www.facebook.com/" target="_blank"  rel="noreferrer">
                <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634133578/final_project/facebook_yieghb.png" alt="iconinsta" /></a>
                </li>
                <li className="footer-item"><a href="https://www.twitter.com/" target="_blank"  rel="noreferrer">
                <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634133750/final_project/twitter_cmpn7s.png" alt="iconinsta" /></a>
                </li>
            </ul>
            </div>

            <div className="footer-copyright">
            <p>&copy; Copyright by&nbsp;<a href="https://github.com/SalJelena">Jelena Salopek</a></p>
            </div>

        </StyledFooter>
    )
}
export default Footer
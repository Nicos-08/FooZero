import Button from "../../Button/Button";
import NavOpen from "../Button/NavOpen/NavOpen";
import "../../../styles/components/Navigation/Navigation/Navigation.css";
import LogoBlack from "../../../assets/pictures/logo.png";
import LogoWhite from "../../../assets/pictures/logo--white.png";

const Navigation = ({ black }) => {
    return (
        <nav>
            <div className="nav-leftPart">
                {black ? <img src={LogoBlack} alt="Food Zero's logo" />
                : <img src={LogoWhite} alt="Food Zero's logo" /> }
                <NavOpen />
            </div>
            <div className="nav-rightPart">
                <div className="nav-phone">+86 852 346 000</div>
                <Button text={`Reservations`} black={black} filled={false} />
            </div>
        </nav>
    )
}

Navigation.defaultProps = {
    black: false
}

export default Navigation
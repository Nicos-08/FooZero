import Button from "../../Button/Button";
import NavOpen from "../Button/NavOpen/NavOpen";
import "../../../styles/components/Navigation/Navigation/Navigation.css";
import Logo from "../../../assets/pictures/logo.png";

const Navigation = () => {
    return (
        <nav>
            <div className="nav-leftPart">
                <img src={Logo} alt="Food Zero's logo" />
                <NavOpen />
            </div>
            <div className="nav-rightPart">
                <div className="nav-phone">+86 852 346 000</div>
                <Button text={`Reservations`} />
            </div>
        </nav>
    )
}

export default Navigation
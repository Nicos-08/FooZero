import { useEffect, useState } from "react";
import "../../styles/components/Button/Button.css";

const Button = ({ text, filled, black }) => {
    const [buttonPropreties, updateButtonPropreties] = useState();
    useEffect( () => {
            if (filled) {
                updateButtonPropreties("button button--filled button--black")
            } else {
                if (black) {
                    updateButtonPropreties("button button--black")
                } else {
                    updateButtonPropreties("button")
                }
            }
        }
    , [black, filled])
    return (
        <div className= {buttonPropreties}>
            <h5>{text}</h5>
        </div>
    )
}

Button.defaultProps = {
    text: "Button",
    filled: false,
    black: false
}

export default Button
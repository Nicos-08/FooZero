import "../../styles/components/Button/Button.css";

const Button = ({ text, filled }) => {
    return (
        <div>
            {filled ?
                <div className="button --filled">
                    <h5>{text}</h5>
                </div> :
                <div className="button">
                    <h5>{text}</h5>
                </div>
            }
        </div>
    )
}

Button.defaultProps = {
    text: "Button",
    filled: false
}

export default Button
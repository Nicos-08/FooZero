import "../../styles/components/Button/Button.css";

const Button = ({ text, filled, link }) => {
    return (
        <div>
            {filled ?
                <div onClick={link} className="button filled">
                    <h5>{text}</h5>
                </div> :
                <div onClick={link} className="button">
                    <h5>{text}</h5>
                </div>
            }
        </div>
    )
}

Button.defaultProps = {
    text: "Button",
    filled: false,
    link: "www.google.com"
}

export default Button
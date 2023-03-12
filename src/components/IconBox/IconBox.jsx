import "../../styles/components/IconBox/IconBox.css";

const IconBox = ({ icon, title, subtitle }) => {
    return (
        <div className="iconBox">
            <div className="iconBox-icon">
                <i className={`las la-${icon}`}></i>
            </div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    )
}

IconBox.defaultProps = {
    icon: "search",
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
}

export default IconBox
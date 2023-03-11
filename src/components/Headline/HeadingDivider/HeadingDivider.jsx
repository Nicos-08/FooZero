import "../../../styles/components/Headline/HeadingDivider/HeadingDivider.css"

const HeadingDivider = ({ title }) => {
    return (
        <div className="headingDivider">
            <span>{title}</span>
            <div className="line"></div>
        </div>
    )
}

HeadingDivider.defaultProps = {
    title: "Comming soon"
}

export default HeadingDivider;
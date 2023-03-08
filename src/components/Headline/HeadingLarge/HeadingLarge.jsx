import "../../../styles/components/Headline/HeadingLarge/HeadingLarge.css"

const HeadingLarge = ({ title, subtitle }) => {
    return (
        <div className="largeHeading">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

HeadingLarge.defaultProps = {
    title: "Starters",
    subtitle: "This is a section of your menu. Give your section a brief description"
}

export default HeadingLarge;
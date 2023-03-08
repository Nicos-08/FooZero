import "../../../styles/components/Headline/HeadlineHero/HeadlineHero.css"

const HeadlineHero = ({ title, subtitle, maxWidth }) => {
    return (
        <div className="heroHeading" style={maxWidth={maxWidth}}>
            <span className="heroHeading">{title}</span>
            <p>{subtitle}</p>
        </div>
    )
}

HeadlineHero.defaultProps = {
    title: "Healthy Eating is important part of lifestyle",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    maxWidth: "1057px"
}

export default HeadlineHero;
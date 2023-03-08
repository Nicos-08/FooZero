import "../../../styles/components/Headline/HeadlineHero/HeadlineHero.css"

const HeadlineHero = ({ maxWidth }) => {
    return (
        <div className="heroHeading" style={maxWidth={maxWidth}}>
            <span className="heroHeading">Healthy Eating is important part of lifestyle</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
        </div>
    )
}

HeadlineHero.defaultProps = {
    maxWidth: "1057px"
}

export default HeadlineHero;
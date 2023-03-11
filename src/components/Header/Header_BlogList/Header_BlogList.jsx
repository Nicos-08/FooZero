import "../../../styles/components/Header/Header_BlogList/Header_BlogList.css";
import Navigation from "../../Navigation/Navigation/Navigation";
import DefaultPropsPicture from "../../../assets/pictures/defaultPropsPictures/Header_BlogList-picture.png";

const HeaderBlogList = ({ title, subtitle, imageSrc }) => {
    return (
        <div className="headerBlogList" style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})`}}>
            <Navigation black={false} />
            <div className="headerBlogList-texts">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

HeaderBlogList.defaultProps = {
    title: "Blogs - One Column",
    subtitle: "It is easy way to create your beatiful blog for daily",
    imageSrc: DefaultPropsPicture
}

export default HeaderBlogList;
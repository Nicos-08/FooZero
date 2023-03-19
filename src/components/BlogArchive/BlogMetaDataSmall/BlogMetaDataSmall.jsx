import '../../../styles/components/BlogArchive/BlogMetaDataSmall/BlogMetaDataSmall.css';
import DefaultPropAvatarImg from "../../../assets/pictures/defaultPropsPictures/BlogMetaDataSmall-avatar.png";

const BlogMetaDataSmall = ({ avatarImg, author, date, time, comments }) => {

    let authorFinal = author.authorName + " " + author.authorFirstName;
    let dateFinal = date.month + " " + date.number + ", " + date.year;
    let timeFinal = time.hour.toString() + " " + (time.morning ? "am" : "pm");

    return (
        <div className="blogMetaDataSmall">
            <img src={avatarImg} alt={`${author}'s avatar`} />
            <span className="label author">{authorFinal}</span>
            <div className="blogMetaDataSmall-divider"></div>
            <span className="label date">{dateFinal}</span>
            <div className="blogMetaDataSmall-divider"></div>
            <span className="label time">{timeFinal}</span>
            <div className="blogMetaDataSmall-divider"></div>
            <span className="label comments">{`${comments} comments`}</span>
        </div>
    )
}

BlogMetaDataSmall.defaultProps = {
    avatarImg: DefaultPropAvatarImg,
    author: {authorName: "Julie", authorFirstName: "Christie"},
    date: {month: "October", number: 17, year: 2021},
    time: {hour: "3:33", morning: false},
    comments: 2
}

export default BlogMetaDataSmall;
import "../../../styles/components/Tag/TagList/TagList.css";
import TagItem from "../TagItem/TagItem"

const TagList = ({ tags }) => {
    return (
        <div className="tagList">
            <h5>Tags :</h5>
            <div className="tagList-container">
                {tags.map((tag, index) => (
                    <TagItem key={`${tag}-${index}`} name={tag} />
                ))}
            </div>
        </div>
    )
}

TagList.defaultProps = {
    tags: ["Tag1", "Tag2", "Tag3"]
}

export default TagList
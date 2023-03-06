import "../../../styles/components/Tag/TagItem/TagItem.css";

const TagItem = ({ name }) => {
    return (
        <div className="tagItem">
            <span className="label">{name}</span>
        </div>
    )
}

TagItem.defaultProps = {
    name: "Tag"
}

export default TagItem
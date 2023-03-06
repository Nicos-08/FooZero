import "../../../styles/components/Tag/TagItem/TagItem.css";

const TagItem = () => {
    return (
        <div className="tagItem">
            <span className="label">Design</span>
        </div>
    )
}

TagItem.defaultProps = {
    // text: "Button",
    // filled: false,
    // link: "www.google.com"
}

export default TagItem
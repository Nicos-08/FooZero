import "../../../styles/components/Tag/TagList/TagList.css";
import FilterItem from "../FilterItem/FilterItem"

const FilterList = ({ tags }) => {
    return (
        <div className="tagList">
            <h5>Tags :</h5>
            <div className="tagList-container">
                {tags.map((tag, index) => (
                    <FilterItem key={`${tag}-${index}`} name={tag} />
                ))}
            </div>
        </div>
    )
}

FilterList.defaultProps = {
    tags: ["Tag1", "Tag2", "Tag3"]
}

export default FilterList
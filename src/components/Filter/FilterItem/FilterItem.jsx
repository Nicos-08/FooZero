import "../../../styles/components/Filter/FilterItem/FilterItem.css";

const FilterItem = ({ itemName }) => {
    return (
        <div className="filterItem">
            <span>{itemName}</span>
            <div className="line"></div>
        </div>
    )
}

FilterItem.defaultProps = {
    itemName: "Item"
}

export default FilterItem
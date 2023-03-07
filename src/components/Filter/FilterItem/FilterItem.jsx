import "../../../styles/components/Filter/FilterItem/FilterItem.css";

const FilterItem = ({ itemName, dashed }) => {
    return (
        <div className="filterItem">
            <span>{itemName}</span>
            {dashed && <div className="line"></div>}
        </div>
    )
}

FilterItem.defaultProps = {
    itemName: "Item",
    dashed: false
}

export default FilterItem
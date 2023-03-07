import "../../../styles/components/Filter/FilterList/FilterList.css";
import FilterItem from "../FilterItem/FilterItem"

const FilterList = ({ filterItems }) => {
    return (
        <div className="filterList">
            {filterItems.map((item, index) => (
                <FilterItem key={`${item.itemName}-${index}`} itemName={item.itemName} dashed={item.dashed} />
            ))}
        </div>
    )
}

FilterList.defaultProps = {
    filterItems: [{itemName: "Item1", dashed: false}, {itemName: "Item2", dashed: true}, {itemName: "Item3", dashed: false}]
}

export default FilterList
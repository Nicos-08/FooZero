import "../../../styles/components/Pagination/PaginationDefault/PaginationDefault.css";
import PaginationDefaultItem from "../PaginationDefaultItem/PaginationDefaultItem";

const PaginationDefault = ({ pages }) => {
    return (
        <div className="paginationDefault">
            <PaginationDefaultItem page="Prev" />
            <div className="paginationDefault-pages">
                {pages.map((item, index)=>(
                    <PaginationDefaultItem page={item} key={`${item}-${index}`} />
                ))}
            </div>
            <PaginationDefaultItem page="Next" />
        </div>
    )
}

PaginationDefault.defaultProps = {
    pages: [2, 3, 4, 5]
}

export default PaginationDefault
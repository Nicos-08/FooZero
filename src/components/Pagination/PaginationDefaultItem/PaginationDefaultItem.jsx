import "../../../styles/components/Pagination/PaginationDefaultItem/PaginationDefaultItem.css";

const PaginationDefaultItem = ({ page }) => {
    return (
        <div className="paginationDefaultItem">
            <p>{page}</p>
        </div>
    )
}

PaginationDefaultItem.defaultProps = {
    page: "Page"
}

export default PaginationDefaultItem
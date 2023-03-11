import "../../../styles/components/BlogArchive/BlogCategory/BlogCategory.css";

const BlogCategory = ({ categoryName }) => {
    return (
        <div className="blogCategory">
            <p>{categoryName}</p>
        </div>
    )
}

BlogCategory.defaultProps = {
    categoryName: "Fashion"
}

export default BlogCategory;
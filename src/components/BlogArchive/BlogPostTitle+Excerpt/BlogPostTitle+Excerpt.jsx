import "../../../styles/components/BlogArchive/BlogPostTitle+Excerpt/BlogPostTitle+Excerpt.css"

const BlogPostTitleAndExcerpt = ({ title, subtitle }) => {
    return (
        <div className="blogPostTitleAndExcerpt">
            <h4>{title}</h4>
            <div className="blogPostTitleAndExcerpt-line"></div>
            <span className="excerpt">{subtitle}</span>
        </div>
    )
}

BlogPostTitleAndExcerpt.defaultProps = {
    title: "Vegan baked oatmeal with fresh berries",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

export default BlogPostTitleAndExcerpt;
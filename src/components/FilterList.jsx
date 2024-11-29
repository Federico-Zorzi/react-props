export default function FilterList({ posts }) {
  const tagsFilters = [];

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!tagsFilters.includes(tag)) tagsFilters.push(tag);
    });
  });

  return tagsFilters.map((tag, index) => (
    <button
      key={index}
      type="button"
      className="btn btn-light mb-3"
      data-color={tag}
    >
      #{tag}
    </button>
  ));
}

export default function FilterList({ posts }) {
  const tagsFilters = [];

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!tagsFilters.includes(tag)) tagsFilters.push(tag);
    });
  });

  return tagsFilters.map((tag, index) => (
    <button key={index} className="badge mb-3" data-color={tag}>
      {tag}
    </button>
  ));
}

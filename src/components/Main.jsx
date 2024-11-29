import Card from "./Card";

import { posts } from "../data/posts";

export default function Main() {
  const filteredPosts = posts.filter((post) => post.published);
  const cardsCreation = filteredPosts.map((post) => (
    <Card
      key={post.id}
      title={post.title}
      image={post.image}
      content={post.content}
      tags={post.tags}
      published={post.published}
    />
  ));

  return (
    <>
      <main>
        <div className="container py-4">
          <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {cardsCreation}
          </div>
        </div>
      </main>
    </>
  );
}

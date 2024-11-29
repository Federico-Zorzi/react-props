import Card from "./Card";

import { posts } from "../data/posts";

export default function Main() {
  return (
    <>
      <main>
        <div className="container py-4">
          <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {posts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                tags={post.tags}
                published={post.published}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

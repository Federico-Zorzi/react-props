import Card from "./Card";

import { posts } from "../data/posts";
import FilterList from "./FilterList";

export default function Main() {
  const filteredPosts = posts.filter((post) => post.published);
  const cardsCreation = filteredPosts.map((post) => (
    <Card
      key={post.id}
      title={post.title}
      image={post.image}
      content={post.content}
      tags={post.tags}
    />
  ));

  return (
    <>
      <main>
        <div className="container py-4">
          <section className="filters text-center">
            <FilterList posts={posts} />
          </section>

          <section className="cards-posts">
            <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {cardsCreation.length > 0 ? (
                cardsCreation
              ) : (
                <div class="alert alert-danger text-center" role="alert">
                  !!! Non sono presenti post da pubblicare !!!
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

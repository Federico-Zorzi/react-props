import photo1 from "../assets/img/photo1.jpg";
import photo2 from "../assets/img/photo2.jpg";
import photo3 from "../assets/img/photo3.jpg";
import photo4 from "../assets/img/photo4.jpg";

const posts = [
  {
    id: 1,
    title: "Titolo del Post 1",
    image: photo1,
    content:
      "Lorem ipsum 1 dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post 2",
    image: photo2,
    content:
      "Lorem ipsum 2 dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post 3",
    image: photo3,
    content:
      "Lorem ipsum 3 dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post 4",
    image: photo4,
    content:
      "Lorem ipsum 4 dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: false,
  },
];

export { posts };

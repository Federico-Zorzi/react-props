import defaultImg from "../assets/img/default-img.svg";
import Button from "./Button/Button";

export default function Card({ title, image, content, tags, published }) {
  return (
    <>
      <div className="col">
        <div className="card m-auto rounded-4">
          <img
            src={image || defaultImg}
            className="card-img-top"
            alt="default-img"
          />
          <div className="card-body">
            <h5 className="card-title fw-semibold">{title}</h5>
            <p className="card-text">{content}</p>

            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

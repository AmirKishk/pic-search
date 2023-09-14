import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ imgs }) {
  const renderImages = imgs.map((img) => {
    return <ImageShow key={img.id} pic={img} />;
  });

  return <div className="image-list">{renderImages}</div>;
}

export default ImageList;

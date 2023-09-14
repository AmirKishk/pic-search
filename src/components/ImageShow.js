function ImageShow({ pic }) {
  return (
    <div>
      <img src={pic.urls.small} alt={pic.alt_description} />
    </div>
  );
}

export default ImageShow;

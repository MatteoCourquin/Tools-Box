import * as htmlToImage from "html-to-image";
import { useEffect, useRef, useState } from "react";
import { IconDownload, IconImageGenerator } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

function ImageGenerator() {
  const image = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageID, setImageID] = useState("");
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [blur, setBlur] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const imgDownload = useRef(null);

  function handleChangeWidth(event) {
    image.style.width = `${event.target.value}px`;
    setWidth(event.target.value);
  }

  function handleChangeHeight(event) {
    image.style.height = `${event.target.value}px`;
    setHeight(event.target.value);
  }

  function handleChangeBlur(event) {
    if (image.current.style.filter === "") {
      image.current.style.filter = `blur(${event.target.value}px)`;
      setBlur(event.target.value);
    } else {
      let blur = image.current.style.filter.split(" ");
      blur[0] = `blur(${event.target.value}px)`;
      image.current.style.filter = blur.join(" ");
      setBlur(event.target.value);
    }
  }

  function handleChangeGrayscale(event) {
    if (image.current.style.filter === "") {
      image.current.style.filter = `grayscale(${event.target.value}%)`;
      setGrayscale(event.target.value);
    } else {
      let grayscale = image.current.style.filter.split(" ");
      grayscale[1] = `grayscale(${event.target.value}%)`;
      image.current.style.filter = grayscale.join(" ");
      setGrayscale(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event && event.preventDefault();
    fetch(`https://api-css-tools.vercel.app/images/${Math.floor(Math.random() * 30) + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.url);
        setImageID(data.id);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(imgDownload.current);
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools design">
          <div className="title-section">
            <h2>Image Generator</h2>
            <IconImageGenerator />
          </div>

          <div className="tools">
            <form onSubmit={handleSubmit}>
              <Input
                type="number"
                label="Width"
                value={width}
                input
                placeholder="1920"
                min="100"
                handleChange={handleChangeWidth}
              />
              <Input
                type="number"
                label="Height"
                value={height}
                input
                placeholder="1080"
                min="100"
                handleChange={handleChangeHeight}
              />

              <Input
                type="range"
                label="Blur"
                min="0"
                max="10"
                input
                step="1"
                value={blur}
                handleChange={handleChangeBlur}
              />
              <Input
                type="range"
                label="Grayscale"
                min="0"
                max="100"
                input
                step="1"
                value={grayscale}
                handleChange={handleChangeGrayscale}
              />

              <button type="submit" className="button">
                Generate
              </button>
            </form>

            <div className="container-image-download">
              {imageUrl && (
                <div ref={imgDownload} className="img-container">
                  <img
                    src={imageUrl}
                    id={imageID}
                    alt="Image"
                    className="img-generate"
                    ref={image}
                  />
                </div>
              )}
            </div>

            {imageUrl && (
              <a
                onClick={() => downloadImage()}
                target="_blank"
                className="button button-download"
              >
                Download
                <IconDownload />
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ImageGenerator;

import { useState } from "react";
import { IconOpenGraph } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

export default function OpenGraphGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [result, setResult] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };

  const handleChangeSiteName = (event) => {
    setSiteName(event.target.value);
  };

  const handleChangeSiteUrl = (event) => {
    setSiteUrl(event.target.value);
  };

  const isValidUrl = () =>
    siteUrl == "" ||
      siteUrl.match(
        "^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$"
      )
      ? false
      : true;

  function handleSubmit(event) {
    event.preventDefault();
    setResult(
      `<meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${imageUrl}" />
      <meta property="og:site_name" content="${siteName}" />
      <meta property="og:url" content="${siteUrl}" />`
    );
  }

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools code">
          <div className="title-section">
            <h2>Open Graph Meta Generator</h2>
            <IconOpenGraph />
          </div>

          <div className="tools">
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Title"
                value={title}
                input
                placeholder="My website"
                required
                handleChange={handleChangeTitle}
              />
              <Input
                type="text"
                label="Description"
                value={description}
                input
                placeholder="Is a website about..."
                required
                handleChange={handleChangeDescription}
              />
              <Input
                type="text"
                label="Image URL"
                input
                value={imageUrl}
                placeholder="assets/image.jpg - https://example.com/image.jpg"
                required
                handleChange={handleChangeImageUrl}
              />
              <Input
                type="text"
                label="Site Name"
                value={siteName}
                input
                placeholder="My website"
                required
                handleChange={handleChangeSiteName}
              />
              <Input
                type="text"
                label="Site URL"
                input
                value={siteUrl}
                placeholder="https://example.com"
                required
                handleChange={(e) => handleChangeSiteUrl(e)}
              />
              {isValidUrl() && (
                <p className="alertMessage">Please enter a valid url</p>
              )}

              <button type="submit" className="button">
                Generate
              </button>
            </form>

            {result && (
              <Input
                textarea
                inputId="result"
                label="Open Graph Meta"
                value={result}
                placeholder="Open Graph Meta"
                copy
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

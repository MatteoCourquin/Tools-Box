import { Link } from "react-router-dom";
import { IconHome } from "./Atoms/Icons";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools home">
          <div>
            <div className="title-section">
              <h2>Tools Box for developpers</h2>
              <IconHome />
            </div>

            <div className="tools">
              <p>What's about Tools Box ?</p>
              <hr />
              <p>
                A developer toolbox is a collection of various tools and
                resources that aid developer.
              </p>
              <hr />
              <Link className="button button-small" to="/password-generator">
                Explore
              </Link>
            </div>
          </div>

          <div className="made-by">
            <p>
              Mady by <a
                href="https://matteo.courqu.in/"
                target="_blank"
                title="Matteo Courquin"
              >Matteo</a> <a
                href="https://august1.dev"
                target="_blank"
                title="Augustin Briolon"
              >Augustin</a> <a
                href="https://github.com/Adelktr"
                target="_blank"
                title="Adel Ktari"
              >Adel</a> with <span className="heart">❤️</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

import { Link } from "react-router-dom";
import {
  IconBase64Converter, IconCaseFormatter,
  IconColorConverter, IconHome, IconImageGenerator, IconJsonViewer, IconLetterCounter, IconListRandomizer, IconMinifier, IconOpenGraph, IconPassword, IconRemoveSpace
} from "./Atoms/Icons";

export default function Header() {
  return (
    <div className="wrapepr-header">
      <header>
        <ul className="navbar-list">
          <li>
            <IconHome />
            <Link to="/">Home</Link>
          </li>

          <p>Security</p>
          <hr className="security" />
          <li>
            <IconPassword />
            <Link to="/password-generator">Password generator</Link>
          </li>

          <li>
            <IconBase64Converter />
            <Link to="/base-64-converter">Base 64 converter</Link>
          </li>

          <p>Text</p>
          <hr className="text"/>
          <li>
            <IconCaseFormatter />
            <Link to="/case-formatter">Case formatter</Link>
          </li>

          <li>
            <IconRemoveSpace />
            <Link to="/space-remover">White Space Remover</Link>
          </li>

          <li>
            <IconLetterCounter />
            <Link to="/letter-counter">Letter Counter</Link>
          </li>

          <p>Design</p>
          <hr className="design"/>
          <li>
            <IconColorConverter />
            <Link to="/color-converter">Color converter</Link>
          </li>
          <li>
            <IconImageGenerator />
            <Link to="/image-generator">Image generator</Link>
          </li>

          <p>Code</p>
          <hr className="code" />
          <li>
            <IconMinifier />
            <Link to="/minifier">Minifier JS / CSS</Link>
          </li>

          <li>
            <IconOpenGraph />
            <Link to="/open-graph">Open Graph generator</Link>
          </li>

          <li>
            <IconJsonViewer />
            <Link to="/json-viewer">Json Viewer</Link>
          </li>

          <li>
            <IconListRandomizer />
            <Link to="/list-randomizer">List Randomizer</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

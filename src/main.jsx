import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import Base64Converter from "./components/Base64Converter";
import CaseFormatter from "./components/CaseFormatter";
import ColorConverter from "./components/ColorConverter";
import ImageGenerator from "./components/ImageGenerator";
import JsonViewerComponent from './components/JsonViewerComponent';
import LetterCounter from "./components/LetterCounter";
import ListRandomizer from "./components/ListRandomizer";
import Minifier from "./components/Minifier";
import OpenGraphGenerator from './components/OpenGraphGenerator';
import PasswordGenerator from "./components/PasswordGenerator";
import WhiteSpaceRemover from './components/WhiteSpaceRemover';

const router = createBrowserRouter([
  { path: "/", element: <App />, },
  { path: "/password-generator", element: <PasswordGenerator /> },
  { path: "/image-generator", element: <ImageGenerator /> },
  { path: "/case-formatter", element: <CaseFormatter /> },
  { path: "/color-converter", element: <ColorConverter /> },
  { path: "/minifier", element: <Minifier /> },
  { path: "/base-64-converter", element: <Base64Converter /> },
  { path: '/open-graph', element: <OpenGraphGenerator /> },
  { path: '/space-remover', element: <WhiteSpaceRemover /> },
  { path: '/letter-counter', element: <LetterCounter /> },
  { path: '/json-viewer', element: <JsonViewerComponent /> },
  { path: '/list-randomizer', element: <ListRandomizer /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React, { useState, useEffect, useRef } from "react";
import EditorPane from "./components/EditorPane";
import PreviewPane from "./components/PreviewPane";
import Toolbar from "./components/Toolbar";

export default function App() {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("body { font-family: Arial; padding: 20px; }");
  const [js, setJs] = useState("console.log('Hello from JS');");
  const [layout, setLayout] = useState("side-by-side");
  const [previewDoc, setPreviewDoc] = useState("");

  const buildDoc = () => `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  useEffect(() => {
    setPreviewDoc(buildDoc());
  }, [html, css, js]);

  return (
    <div className="app">
      <Toolbar setLayout={setLayout} layout={layout} />
      <div className={`editor-preview ${layout}`}>
        <EditorPane html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs} />
        <PreviewPane previewDoc={previewDoc} />
      </div>
    </div>
  );
}

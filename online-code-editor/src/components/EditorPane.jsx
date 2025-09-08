import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function EditorPane({ html, setHtml, css, setCss, js, setJs }) {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className="editor-pane">
      <div className="tabs">
        {["html", "css", "js"].map((lang) => (
          <button key={lang} onClick={() => setActiveTab(lang)} className={activeTab === lang ? "active" : ""}>
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "html" && (
        <Editor language="html" value={html} onChange={(v) => setHtml(v || "")} height="100%" options={{ minimap: { enabled: false } }} />
      )}
      {activeTab === "css" && (
        <Editor language="css" value={css} onChange={(v) => setCss(v || "")} height="100%" options={{ minimap: { enabled: false } }} />
      )}
      {activeTab === "js" && (
        <Editor language="javascript" value={js} onChange={(v) => setJs(v || "")} height="100%" options={{ minimap: { enabled: false } }} />
      )}
    </div>
  );
}

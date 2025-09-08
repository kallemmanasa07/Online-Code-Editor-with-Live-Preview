import React from "react";

export default function Toolbar({ setLayout, layout }) {
  return (
    <div className="toolbar">
      <h2>Online Code Editor</h2>
      <select value={layout} onChange={(e) => setLayout(e.target.value)}>
        <option value="side-by-side">Side by Side</option>
        <option value="stack">Stacked</option>
        <option value="editor-only">Editor Only</option>
        <option value="preview-only">Preview Only</option>
      </select>
    </div>
  );
}

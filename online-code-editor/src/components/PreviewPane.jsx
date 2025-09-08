import React from "react";

export default function PreviewPane({ previewDoc }) {
  return (
    <div className="preview-pane">
      <iframe title="Preview" srcDoc={previewDoc} sandbox="allow-scripts" />
    </div>
  );
}

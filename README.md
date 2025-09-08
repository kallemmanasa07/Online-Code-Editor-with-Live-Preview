Online Code Editor with Live Preview
 Introduction
The demand for online code editors has increased rapidly as learners, developers, and educators require lightweight environments for writing and testing code instantly. An online code editor with live preview provides the ability to write HTML, CSS, and JavaScript in one place while instantly visualizing the results in a browser window.
This project implements a browser-based IDE using React and Monaco Editor (the editor powering VS Code), with a real-time preview pane. It is designed to be lightweight, responsive, and user-friendly, making it suitable for students, developers, and instructors.
 Abstract
The project Online Code Editor with Live Preview is a web application that allows users to write, edit, and execute code snippets in HTML, CSS, and JavaScript. The editor supports syntax highlighting, a clean user interface, and a real-time rendering environment where the output is shown in an iframe preview pane.
The system is built using React.js as the frontend framework and leverages @monaco-editor/react for the editor functionality. The project’s modular structure separates the editor panes, preview window, and toolbar, making the application easy to extend with features like templates, code sharing, and cloud storage.
  Tools Used
1.	React.js → JavaScript library for building the UI.
2.	Monaco Editor (@monaco-editor/react) → Code editor with VS Code features (syntax highlighting, autocompletion).
3.	HTML5, CSS3, JavaScript (ES6) → Core web technologies for rendering and styling.
4.	React Scripts → For project setup, development, and build process.
5.	Node.js & npm → Runtime and package manager for installing dependencies and running the project.
6.	Browser iframe → To render the live output of the code written by the user.
  Steps Involved in Building the Project
        Step 1: Project Setup
•	Install Node.js and npm.
•	Create a React app:
       npx create-react-app online-code-editor
       cd online-code-editor
       npm install @monaco-editor/react
  	structure
  	online-code-editor/
├── public/
|   ├──index.html
├── src/
│   ├── components/
│   ├── Toolbar            
│   ├── EditorPanel
│   ├── PreviewPane
├── App
├── styles
├── index.js
└── package.json

         Step 2: Create the UI
•	Build EditorPane.jsx using Monaco Editor.
•	Create PreviewPane.jsx with an iframe to display live output.
•	Add Toolbar.jsx for the project title (and optional future buttons like Run, Clear, Save).
•	Style layout in styles.css (split editor and preview vertically).
      Step 3: Logic Implementation
•	Use React’s useState hooks in App.jsx to manage HTML, CSS, and JS code.
•	Construct a dynamic srcDoc that injects the HTML, CSS, and JS into the iframe.
•	Ensure the editor updates the preview in real time when code changes.
    Step 4: Testing
•	Test the application locally using:
                npm start
•	Verify:
o	HTML editor updates instantly in preview.
o	CSS styling applies correctly.
o	JavaScript runs in console and page.
     Step 5: Deployment (Optional)
•	Deploy to Netlify, Vercel, or GitHub Pages for online access.
•	Run:
 npm run build
    and upload the build folder.
 Conclusion
The Online Code Editor with Live Preview successfully demonstrates how modern frontend tools can replicate IDE functionality in the browser. With React and Monaco Editor, the system provides a smooth coding experience with real-time feedback.
This project can be further enhanced by:
•	Adding code templates (e.g., Bootstrap starter, HTML boilerplate).
•	Supporting cloud storage for saving and loading snippets.
•	Enabling multi-file projects or collaborative editing.

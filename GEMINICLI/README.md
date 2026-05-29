Role: Expert Technical Writer and Lead React Architect.

Task: Generate a comprehensive, professional `README.md` file for a React application called "CCNA 200-301 Mastery Dashboard".

Context & Architecture:

- Tech Stack: React, TypeScript, Tailwind CSS, Vite (or Create React App).
- Serverless Concept: This is a 100% frontend application. There is NO backend database or API.
- Core Feature: The app acts as a study hub, organizing and displaying 63 standalone HTML dashboard files.
- Static Assets: The 63 HTML files are stored directly in the `public/data/LinkHTML/` directory.
- Safe Viewing Strategy: The app uses an `<iframe>` to render these HTML files dynamically (e.g., `<iframe src="/data/LinkHTML/ccna_day_1_dashboard.html">`). This sandboxes the heavy internal styles and scripts (like Tailwind CDN) found in the HTML files so they do not break the main React UI.
- State Management: Uses browser `localStorage` (via a custom `useProgress` hook) to persistently track which days the user has marked as "Done".
- Navigation: Includes a live search filter in the Header to instantly filter the day cards by title.

Required Sections in the README:

1. Project Overview.
2. Key Features (Highlight the Serverless nature, Iframe Viewer, Local Progress tracking, and Live Search).
3. Tech Stack.
4. Architecture Decisions (Explicitly explain why iframes were used for safe HTML injection and why localStorage was chosen over a database).
5. Data Structure (Show a TypeScript snippet of `data.ts` demonstrating how `filePath` maps to the public directory).
6. Getting Started (Standard npm install and run instructions).
7. Project Structure (Provide an ASCII tree highlighting the `public/data/LinkHTML/` path and `src/` components).

Constraint: Output ONLY the raw markdown content for the README. Do not include introductory or concluding conversational text.

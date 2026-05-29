# CCNA 200-301 Mastery Dashboard

A comprehensive, professional study hub for mastering the CCNA 200-301 curriculum. This application organizes 63 standalone HTML dashboard files into a cohesive, responsive, and interactive learning environment.

## 🚀 Key Features

*   **Serverless Architecture:** 100% frontend application with no backend dependencies or APIs, ensuring lightning-fast performance and easy deployment.
*   **Iframe-Based Dashboard Viewer:** Dynamically renders standalone HTML study files within a sandboxed `<iframe>`. This strategy prevents internal styles and scripts (such as Tailwind CDN) within the HTML files from interfering with the main application's UI.
*   **Persistent Progress Tracking:** Uses browser `localStorage` to track completed topics. Your progress is saved automatically and persists across browser sessions.
*   **Live Search Filter:** Instantly filter the dashboard by topic title to find exactly what you need.
*   **Fully Responsive Design:** Optimized for a seamless experience across mobile, tablet, and desktop devices.

## 🛠 Tech Stack

*   **React:** For building the user interface.
*   **TypeScript:** Ensuring type safety and maintainable code.
*   **Tailwind CSS:** For modern, responsive, and utility-first styling.
*   **Vite:** A blazing fast build tool and development server.

## 🏗 Architecture Decisions

### Why Iframes?
The core content of this application consists of 63 standalone HTML files, each containing its own heavy CSS (Tailwind CDN) and scripts. Directly injecting these into the React DOM would lead to massive style collisions and potential performance degradation. Using `<iframe>` creates a secure sandbox for each dashboard, ensuring the main application remains stable and lightweight.

### Why LocalStorage?
To keep the application "Serverless" and easy to host (e.g., GitHub Pages, Netlify), `localStorage` was chosen for progress tracking. It provides a simple, persistent key-value store for user data without the complexity of a database or authentication system.

## 📊 Data Structure

The application's content is driven by a central `data.ts` file. Each topic is represented as follows:

```typescript
export interface CcnaTopic {
  id: number;
  dayNumber: number;
  title: string;
  filePath: string;
}

export const ccnaData: CcnaTopic[] = [
  {
    id: 1,
    dayNumber: 1,
    title: "Networking Devices",
    filePath: "ccna_day_1_dashboard.html",
  },
  // ... 62 more topics
];
```

## 📁 Project Structure

```text
/
├── public/
│   └── data/
│       └── LinkHTML/        # 63 standalone HTML dashboard files
├── src/
│   ├── components/          # Reusable UI components
│   ├── hooks/               # Custom React hooks (useProgress)
│   ├── data/
│   │   └── data.ts          # Central data configuration
│   ├── App.tsx              # Main application logic
│   └── main.tsx             # Entry point
├── package.json
└── vite.config.ts
```

## 🏁 Getting Started

### Prerequisites
*   Node.js (v16 or higher)
*   npm or yarn

### Installation
1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Development
Run the development server:
```bash
npm run dev
```

### Build
Generate a production-ready build:
```bash
npm run build
```

## 📜 Credits

All educational content within this dashboard is credited to:

*   **Jeremy's IT Lab:** [CCNA 200-301 YouTube Playlist](https://youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ&si=OHizNnJ5TmmM3MIP)
*   **CCNA Course Notes Repository:** [psaumur/CCNA_Course_Notes](https://github.com/psaumur/CCNA_Course_Notes/tree/main)


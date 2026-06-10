# Journey to the CCNA and network engineer

## Overview

As the study materials have grown, the application's architecture has evolved from a single-page view into a robust multi-page structure. The latest update introduces a dedicated **Lab Notes** page. This new section is built using the same highly effective architecture as the "Review and Course Notes" page—utilizing a sandboxed iframe to render heavy HTML files—but operates entirely independently to keep practical lab work separate from theoretical study.

## Structural Changes

- **Main Index Page:** The primary landing page now serves strictly as an introduction and gateway to the overall CCNA journey. It is kept lightweight and intentionally defers all heavy data rendering to the specific study routes.
- **Review and Course Notes Page:** A dedicated route that safely encapsulates the theoretical study dashboards (e.g., daily theory modules and notes).
- **Lab Notes Page (New):** A completely isolated, dedicated route functioning identically to the Course Notes. It uses the same safe iframe rendering strategy but loads distinct interactive lab files, CLI notes, and practical setups.
- **Future Expansion:** The routing architecture is highly scalable, making it seamless to plug in additional dedicated study pages as the journey progresses.

## Data and Progress Separation

To prevent any collision between theoretical study and practical exercises, the application treats these two sections as entirely separate entities:

- **Isolated Content:** Course notes and lab notes are powered by distinct datasets, ensuring that daily theory files do not mix with interactive lab files in the UI.
- **Independent Tracking:** Progress tracking (such as marking a module as "Done") is handled independently for each page. Completing a practical lab exercise will not accidentally overwrite or check off a theoretical course day, keeping your study metrics accurate.

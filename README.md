Interview Prep App
A comprehensive interview preparation application featuring categorized questions and answers for MongoDB, Authentication, Redux, and WebSocket/Socket.IO. Built with React and styled in a MongoDB-inspired design, this app includes progress tracking and a searchable interface.
Features

Categorized Questions: Basic, Intermediate, and Advanced levels for each topic.
Progress Tracking: Mark questions as read with a persistent progress bar.
Search Functionality: Filter questions by keywords in English or Bengali.
Responsive Design: Optimized for desktop and mobile views.
Local Storage: Saves progress across sessions.

Tech Stack

Frontend: React, Next.js
Styling: Tailwind CSS
State Management: Local Storage
Animations: Framer Motion
Icons: Lucide React

Prerequisites

Node.js (v14.x or later)
npm or yarn

Installation

Clone the repository:
git clone https://github.com/your-username/interview-prep-app.git
cd interview-prep-app


Install dependencies:
npm install
# or
yarn install


Start the development server:
npm run dev
# or
yarn dev


Open your browser and visit:
http://localhost:3000



Usage

Navigate to specific topics via the URL (e.g., /mongodb, /authentication, /redux, /websocket).
Use the level tabs to switch between Basic, Intermediate, and Advanced questions.
Search for questions using the search bar.
Click the "Mark as Read" icon (book) to track your progress, reflected in the progress bar.
Expand questions to view detailed answers in English and Bengali.

Project Structure
interview-prep-app/
├── app/                # Next.js pages (e.g., mongodb, authentication, redux, websocket)
├── data/               # Data files (e.g., mongodbData.js, authenticationData.js)
├── components/         # Reusable components (e.g., ProgressTracker)
├── public/             # Static assets
├── README.md           # This file
└── package.json        # Project dependencies and scripts

Contributing

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m "Add your message").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request with a clear description of your changes.

Issues
If you encounter any bugs or have feature requests, please open an issue on the GitHub Issues page.
License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Inspired by MongoDB's design aesthetics.
Built with love using open-source tools and libraries.

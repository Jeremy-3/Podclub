# PodClub Frontend

**PodClub** is a social platform for people interested in music and podcasts. The front-end is built using ReactJS, enabling users to create and join group channels, share messages, and interact with others who have similar interests.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This repository contains the front-end code for **PodClub**. The main purpose of this app is to allow users to create group channels related to music and podcasts, send messages, share images, and join in discussions. Admins can manage channels and oversee user activity.

## Features

### User Features

- **Authentication**: Users can register and log in.
- **Channel Management**: Users can create, update, and delete group channels (up to 5 per user).
- **Messaging**: Send, edit, and delete messages within group chats.
- **Replies and Images**: Reply to messages in threads and share images.
- **Join Channels**: Users can join channels upon invitation and report offensive users.

### Admin Features

- **Manage Users**: View all channels, ban reported users, and unban previously banned users.

## Technologies Used

- **Frontend**: ReactJS, JavaScript (ES6+)
- **Styling**: CSS Modules
- **Routing**: React Router
- **Package Manager**: npm

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/PodClub-frontend.git
   cd PodClub-frontend

   ```

2. Install dependencies:

3. npm install

4. Start the development server:

    npm start

    This command runs the app in development mode. Open http://localhost:3000 to view it in the browser.

5. Folder Structure
  ```plaintext
PodClub-frontend/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   ├── pages/               # Main page components
│   ├── services/            # API calls and services
│   ├── assets/              # For support files
│   ├── App.js               # Main app component
│   └── index.js             # Main entry point
├── .gitignore
├── package.json
└── README.md
``

## Contributing

Contributions are welcome! To contribute:

    Fork the project.
    Create your feature branch (git checkout -b feature/AmazingFeature).
    Commit your changes (git commit -m 'Add some AmazingFeature').
    Push to the branch (git push origin feature/AmazingFeature).
    Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
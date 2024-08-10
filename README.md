Disaster Management System

Welcome to the Disaster Management System repository. This project aims to provide a comprehensive solution for disaster management, including real-time alerts, resource management, and emergency contact information.

Table of Contents

1. Overview
2. Features
3. Installation
4. Usage
5. API Endpoints
6. Deployment
7. Contributing
8. License

Overview

This project is a React-based web application designed to help users manage and respond to disaster situations effectively. It includes features such as sending SOS signals, viewing nearby shelters, and accessing emergency contact information.

Features

- User Authentication: Collects user phone numbers and emails for registration.
- SOS Alerts: Allows users to send SOS signals via email to rescuers.
- Resource Management: Provides access to various disaster management resources.
- Emergency Contacts: Displays emergency contact information.
- Location-Based Shelters: Shows links to nearby shelters based on the user's location.
- Responsive Design: Ensures a user-friendly experience across different devices.

Installation

To set up the project locally, follow these steps:

1. Clone the Repository:
   git clone https://github.com/Vishnusbhat/disaster-management.git

2. Navigate to the Project Directory:
   cd disaster-management

3. Install Dependencies:
   Ensure you have Node.js and npm installed. Then run:
   npm install

4. Set Up Environment Variables:
   Create a .env file in the root directory and add your EmailJS credentials:
   VITE_EMAILJS_USER_ID=your_emailjs_user_id
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id

Usage

1. Start the Development Server:
   npm run dev

2. Open Your Browser:
   Visit http://localhost:3000 to see the application in action.

3. Login Page:
   Users must provide their phone number and email address before accessing the main application.

4. Send SOS Signals:
   Navigate to the SOS feature page and click the button to send an SOS signal via email to rescuers.

5. View Resources and Contacts:
   Access the Resources and Emergency Contacts pages from the navigation bar.

API Endpoints

SOS Endpoint

- URL: http://localhost:5000/api/sos
- Method: POST
- Description: Sends an SOS signal via email.
- Request Body:
  {
    "email": "user_email_address"
  }

EmailJS Configuration

- Service ID: YOUR_SERVICE_ID
- Template ID: YOUR_TEMPLATE_ID
- User ID: YOUR_USER_ID

Deployment

For deploying the application, follow these steps:

1. Build the Project:
   npm run build

2. Deploy to Your Preferred Hosting Service:
   You can deploy the build folder to any static site hosting service like Vercel, Netlify, or GitHub Pages.

Contributing

We welcome contributions to improve the Disaster Management System. To contribute:

1. Fork the Repository.
2. Create a New Branch:
   git checkout -b feature/your-feature

3. Make Your Changes and Commit:
   git commit -am 'Add new feature'

4. Push Your Changes:
   git push origin feature/your-feature

5. Open a Pull Request:
   Submit a pull request to the main repository with a description of your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

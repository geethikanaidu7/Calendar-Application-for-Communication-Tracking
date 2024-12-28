# Calendar Communication Tracking

This is a React-based application designed to help organizations track and manage their communication with other companies. It features an admin module for setting up companies and communication parameters, a user dashboard for viewing and performing tasks, and optional reporting and analytics capabilities.

## Features

### Admin Module
- **Company Management**: Add, edit, and delete companies. Each company has the following attributes:
  - Name
  - Location
  - LinkedIn Profile
  - Emails
  - Phone Numbers
  - Comments
  - Communication Periodicity
- **Communication Method Management**: Define communication methods such as LinkedIn posts, emails, or phone calls. Manage the sequence and mandatory steps for communication.

### User Module
- **Dashboard**: View a summary of companies, past interactions, and upcoming communication tasks with color-coded highlights for overdue and due communications.
- **Notifications**: Get alerts for overdue and today's scheduled communications.
- **Calendar View**: Visualize past and upcoming communication tasks.

### Optional Reporting Module
- Communication frequency reports
- Overdue communication trends
- Exportable reports (PDF/CSV)

## Getting Started

### Prerequisites
- Node.js and npm installed on your computer
- Git installed

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd calendar-communication-tracking
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the application locally, run:
```bash
npm start
```
This will open the application in your default browser at `http://localhost:3000/`.

## Deployment
Deploy the application to a hosting service such as Vercel, Netlify, or GitHub Pages.

### Deployment Steps
1. Build the application:
   ```bash
   npm run build
   ```
2. Follow the deployment instructions for your chosen platform (e.g., upload the contents of the `build` folder).

## Folder Structure
- `public/`: Static files (e.g., `index.html`).
- `src/`: Source code for the application.
  - `components/`: Reusable components.
  - `pages/`: Main pages (e.g., AdminPage, UserDashboard).
  - `styles/`: Tailwind CSS setup.
  - `utils/`: Utility functions (if needed).

## Libraries and Tools
- **React**: For building the user interface.
- **React Router**: For navigation.
- **Tailwind CSS**: For styling.
- **FullCalendar**: For calendar functionality.
- **Chart.js**: For analytics (optional).

## Known Limitations
- Reporting module is optional and not fully implemented.
- Calendar view requires additional customization for advanced features.

## Future Enhancements
- Add authentication for admin and user access.
- Integrate backend API for data persistence.
- Enhance reporting capabilities.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

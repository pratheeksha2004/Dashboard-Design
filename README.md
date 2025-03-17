# Frontend Dashboard (React + Vite + Tailwind CSS)

This project is a frontend dashboard built using React, Vite, and Tailwind CSS. It provides different views and functionalities based on user roles: business owner, admin, and store manager.

## Features

*   **Role-Based Access Control:** Different dashboards and functionalities based on user roles (business owner, admin, store manager).
*   **Business Owner Dashboard:**
    *   Create and manage businesses
    *   Create and manage invoices
    *   Tax and compliance settings
    *   Charts displaying key business metrics
*   **Store Manager Dashboard:**
    *   Create and process invoices
    *   Track and manage inventory
    *   Manage customer records
    *   Daily sales reports
*   **Admin Dashboard:**
    *   Manage users (add, edit, and remove)
    *   Configure third-party integrations
    *   User statistics and financial reports
*   **Responsive Design:** Built with Tailwind CSS for a responsive and visually appealing user interface.
*   **Chart.js Integration:** Uses React Chart.js 2 for interactive data visualization.
*   **Vite Build Tool:** Leverages Vite for fast development and optimized production builds.

## Technologies Used

*   [React](https://reactjs.org/) - JavaScript library for building user interfaces
*   [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
*   [React Router DOM](https://reactrouter.com/en/main) - For handling client-side routing
*   [React Chart.js 2](https://react-chartjs-2.js.org/) - React components for Chart.js
*   [Chart.js](https://www.chartjs.org/) - Library for creating charts and graphs.


## Setup/Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/frontend-dashboard.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd frontend-dashboard
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev
    ```

    The frontend application should now be running in your browser, typically on `http://localhost:5173`.  (Vite usually defaults to port 5173, but check your console output).

## Usage

1.  **Access the dashboard in your browser:** Open your web browser and navigate to the URL where the frontend application is running (e.g., `http://localhost:5173`).

2.  **Login:** The dashboard likely requires users to log in. Use the appropriate credentials for each role (business owner, admin, store manager) to access the corresponding dashboard.

3.  **Explore the dashboard:** Use the sidebar navigation to access different sections and functionalities of the dashboard.

## Known Issues/Limitations
*   Currently, no backend implementation is available, so no data is coming from a real source.

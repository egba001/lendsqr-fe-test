# Lendsqr Frontend Engineering Assessment

## Overview

This project is a frontend application developed as part of the assessment for the Lendsqr engineering role. It is built using **Next.js**, **TypeScript**, and **SCSS**, with a mock API created using **Mocky.io** to simulate backend interactions. The application includes four primary pages: **Login**, **Dashboard**, **User Page**, and **User Details Page**.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [File Structure](#file-structure)
-   [Features](#features)
-   [Design](#design)
-   [Technologies Used](#technologies-used)
-   [Testing](#testing)
-   [Deployment](#deployment)
-   [Conclusions](#conclusions)
-   [Additional Documentation](#additional-documentation)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/<your-username>/lendsqr-fe-test.git
    cd lendsqr-fe-test

    ```

2. Install dependencies:

    ```bash
    npm install

    ```

3. Start the development server:

    ```bash
    npm run dev

    ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Usage

-   Navigate to the **Login** page to authenticate users.
-   After logging in, users will be redirected to the **Dashboard**.
-   The **User Page** displays a list of users fetched from the mock API.
-   Clicking on a user leads to the **User Details Page**, where additional user information is stored in local storage.

## File Structure

The project follows a modular structure, which helps in maintaining clarity and organization:

### Description of Key Directories

-   **public/**: Contains static assets like images and icons.
-   **src/**: Main source directory for application code.
    -   **components/**: Contains reusable components such as filters, loaders, user cards, and modals.
    -   **app/**: Contains page components; each file corresponds to a route in the application.
    -   **assets/**: Contains SCSS files for styling component-specific styles, storing images, icons and local fonts.
    -   **utils/**: Utility functions.
    -   **interfaces/**: TypeScript interfaces definitions for data structures used in the app.
    -   **contexts/**: Contexts files used within the application are stored here.

## Features

-   **Responsive Design**: The application is fully responsive and adapts to various screen sizes using flexible layouts and media queries.
-   **Mock API Integration**: Simulates user data retrieval from a backend service using Mocky.io.
-   **Local Storage**: User details are persisted using local storage, allowing data to remain available between sessions.
-   **Interactive UI**: Dynamic filtering and user interactions enhance usability.

## Design

The application was designed to closely follow the provided Figma design specifications. Key design elements include:

-   Consistent use of colors, fonts, and spacing as outlined in the Figma files.
-   Responsive grid layouts for both the dashboard and user lists.
-   Interactive elements such as buttons and modals that match the design mockups.

## Technologies Used

-   **Next.js**: Framework for server-rendered React applications.
-   **TypeScript**: A typed superset of JavaScript for building robust applications.
-   **SCSS**: CSS preprocessor for modular and maintainable styles.
-   **Mocky.io**: Tool used to create a mock API for simulating backend responses.

## Testing

The application includes unit tests to validate functionality, covering:

-   Positive and negative scenarios for user login.
-   API response handling.
-   Local storage interactions.

Tests are implemented using **Jest** and **React Testing Library** for component-level testing.

## Deployment

The application is deployed on Vercel. You can access the live demo [here](https://egba-nnaemeka-lendsqr-fe-test.vercel.app).

## Conclusions

This assessment provided an opportunity to demonstrate my proficiency in building responsive web applications using Next.js a React framework, TypeScript, and SCSS. The design fidelity and adherence to the project requirements were prioritized throughout development. Feedback is welcomed!

## Additional Documentation

For a detailed review of my work, including decision-making and comparisons with the design, please refer to this document: [Project Review Document](https://link-to-your-document.com).

### Video Review

I have created a video walkthrough of the application showcasing the implementation against the design specifications. You can view it here: [Video Review](https://link-to-your-video.com).

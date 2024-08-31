# spam API

A powerful and efficient RESTful API for searching users by their phone numbers. This project is built with TypeScript, Express, and JSON Web Tokens (JWT) for authentication, providing a secure way to access user information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search users by phone number.
- Secure JWT-based authentication.
- TypeScript for type safety and better development experience.
- Error handling and response validation.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express**: Fast and minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript for better code quality.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Postman**: For testing API endpoints.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   cd api
   Install all the dependency
   ```

```bash
bun install
```

Set up environment variables:
Create a .env file in the root of the project and add the following:

```bash
JWT_SECRET=your-secret-key
```

You can replace your-secret-key with a strong secret key.

**Run the application:**

```bash
npm start
```

The server will start on http://localhost:3000.

# Usage

## Authentication

To access protected routes, you need to obtain a JWT token. Use your existing authentication mechanism to generate the token. Once you have the token, include it in the Authorization header as follows:

```bash
Authorization: Bearer <your-token>
```

## API Endpoints

_Search User by Phone Number_

Endpoint: /search/phone/:phoneNumber

Method: GET

Authorization: Required

Parameters:

phoneNumber: The phone number to search for.

## Response:

200 OK: Returns user details.

401 Unauthorized: Token is missing or invalid.

403 Forbidden: Token is invalid or user is not authorized.

# Thank you

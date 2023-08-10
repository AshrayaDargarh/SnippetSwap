# SnippetSwap

SnippetSwap is a MERN stack web application that allows users to register, log in, create, edit, and share code snippets (referred to as 'views'). It also includes features for updating user details, password reset via email verification, and authentication using JSON Web Tokens (JWT).

## Note

**Please Note:** This project is currently in development and is not fully ready for production use. Only the backend part of the application has been completed. The frontend part is under active development and will be added in future updates.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- User Registration: New users can create accounts by registering with their email and password.
- User Login: Registered users can log in using their credentials.
- View Creation: Users can create code snippets ('views') and give them a name and content.
- View Sharing: Created views can be shared with others.
- View Editing: User can edit the content of their views.
- View Deletion: Users can delete their own views.
- User Profile Update: Users can update their name, password, and email.
- Password Reset: Users can reset their password by email verification.
- JWT Authentication: User authentication is managed using JSON Web Tokens.

## Getting Started

To run the SnippetSwap application locally, follow these steps:

1. Clone the repository:
    - git clone https://github.com/AshrayaDargarh/SnippetSwap.git

2. Install the dependencies for server:

    - cd SnippetSwap
    - npm install

3. Create a `.env` file in the root directory and add your environment variables (e.g., database connection URI, JWT secret, email service credentials).

4. Start the development server:
    - npm run dev


## Usage

1. Register: Create a new account by providing your email and password.
2. Log in: Log in to your account using your credentials.
3. Create a View: After logging in, you can create code snippets ('views') by providing a name and content.
4. Edit a View: Click on a view to edit its content.
5. Share a View: Obtain the view's URL to share it with others.
6. Delete a View: Delete your views by clicking on the delete button.
7. Update Profile: Update your name, password, and email through the profile section.
8. Forgot Password: Reset your password by requesting a password reset email.




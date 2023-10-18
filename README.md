# Password Strength Checker

This project is a simple React application for checking the strength of a password and ensuring password match during a reset password process. It provides instant feedback to users about the strength of their chosen password.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Password Strength Criteria](#password-strength-criteria)

## Tech Stack

- React: JavaScript library for building user interfaces
- TypeScript: Adds static types to JavaScript for improved development experience
- CSS: Styling for user interface
- React Testing Library & Jest: Testing tools for unit tests

## Getting Started
```
npm install

npm start

```

or

```
yarn install

yarn start

```

## How to Use

1. Enter a new password in the "Enter your new password" input field.

2. The password strength will be displayed as "Strong," "Good," or "Poor" based on the criteria mentioned below.

3. Enter the same password in the "Match your password" input field to ensure they match. If they match, a success message will appear; otherwise, an error message will be displayed.

4. Click the "Create Password" button to submit the password.

5. If the password is strong and matches, you will receive a success message.

## Password Strength Criteria

The password strength is determined based on the following criteria:

Strong Password: A strong password must meet all of the following criteria:
At least 8 characters long
At least one uppercase letter
At least one lowercase letter
At least one digit (0-9)
At least one special character (e.g., @, #, $)

Good Password: A good password must meet all of the following criteria:
At least 8 characters long
At least one of the following:
Uppercase letter
Lowercase letter
Special character
At least one digit (0-9)

Poor Password: Any password that does not meet the criteria for strong or good passwords.

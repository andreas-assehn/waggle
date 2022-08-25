# Waggle

## What is Waggle

Waggle is a matching app to find playmates for your dog. Search from users in your area and filter based on distance. Once you match with another user you can chat with them and organize a meet or maybe attend an event? Events are also shown by distance and you can create you own.

## Features

- Create an account for yourself and upload all your pets details
- Swipe yes or no on other users based on distance
- Chat with matched users
- Create or attend events in your area
- Save events to your calendar:
  - Google
  - Apple
  - Outlook

## Technology Used

- Front End

  - React
  - Redux Toolkit
  - Sass
  - Cloudinary
  - Framer Motion
  - Lottie

- Back End

  - NodeJs
  - Express.js
  - Mongo Atlas with Mongoose

- Others
  - Firebase Authentication
  - Socket.io
  - Typescript
  - Cypress Testing

## How to run Waggle

- clone the repository
- create a firebase project (javascript), save your firebase details in the client/.env file
- add a firebase service account (NodeJs) and save this file in the server/firbase-config folder as serviceAccount.json
- start MongoDB Atlas and add the required variables to server/.env file

- cd into the server folder and run `npm i`
- cd into the client folder and run `npm i`
- cd into the client folder and run `npm start` and go to `http://localhost:3000/`
- cd into the server folder and run `npm run dev`

# Waggle

<p align='center'>
  <img src='./Docs/read-me-images/read-me-logo-1.png' />
</p>

Waggle is a mobile view matching app to find playmates for your dog. Search from users in your area and filter based on distance. Once you match with another user you can chat with them and organize a meet or maybe attend an event? Events are also shown by distance and you can create you own.

## Screenshots

<p align='center'>
  <img src='./Docs/read-me-images/screenshot-readme.png' />
  <img src='./Docs/read-me-images/screenshot-readme-1.png' />
</p>

## Features

- Create an account for yourself and upload all your pets details
- Swipe yes or no on other users based on distance
- Chat with matched users
- Create or attend events in your area
- Save events to your calendar:
  - Google
  - Apple
  - Outlook

## Getting Started

Except the regulars; git, Node, npm, you will need the following to work on and run the Waggles app, before _Installation_:

- [Firebase](https://firebase.google.com/) Account
- [Cloudinary](https://cloudinary.com/) Account
- [Geoapify](https://apidocs.geoapify.com/docs/place-details/#quick-start) Account
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone this repo and enter!

```bash
   git clone https://github.com/andreas-assehn/waggle.git
   cd waggle
```

2. Install dependencies in both the root folder and both the client and server folders.

```bash
  npm install               # ! root folder !
```

```bash
  cd client                 # ! Change into the client folder !
  npm install
```

```bash
  cd ../server              # ! Change into the server folder !
  npm install
```

3. Setup the .env files (.env.example file are given in both the client and server folder)

- create a firebase project (javascript), save your firebase details in the **client/.env** file
- put your _Cloudinary_ and _Geoapify_ API keys into the **client/.env** file
- add a Firebase service account (NodeJs) and save this file in the **server/firebase-config** folder as **serviceAccount.json**
- start MongoDB and add the required url to **server/.env** file to connect to your database

4. Run the server

```bash
cd server                 # ! New terminal and change into the server folder !
npm run dev
```

5. Run the client

```bash
cd client                 # ! New terminal and change into the client folder !
npm start
```

6. **This app was made for mobile view, use chrome dev tools to view in a mobile device window**

## Technology Used

- [React](https://reactjs.org/)
- [Redux Toolkit](https://reactjs.org/)
- [NodeJs](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Socket.io](https://socket.io/)
- [Sass](https://sass-lang.com/)
- [Cloudinary](https://cloudinary.com/)
- [Geoapify](https://apidocs.geoapify.com/docs/place-details/#quick-start)
- [Framer](https://www.framer.com/developers/)
- [Lottie](https://lottiefiles.com/)
- [MongoDB](https://www.mongodb.com/)
- [Firebase](https://firebase.google.com/)

## Developers

- Andreas Asséhn - _[Github](https://github.com/andreas-assehn)_ - [LinkedIn](https://www.linkedin.com/in/andreas-assehn/)
- Freya Caudwell - _[Freya Github Profile](https://github.com/fcaud)_ - [LinkedIn](https://www.linkedin.com/in/freya-caudwell/)
- Keval Patel - _[Keval Github Profile](https://github.com/Keval-P21)_ - [LinkedIn](www.linkedin.com/in/keval-r-patel)
- Kevin Ott - _[Kevin Github Profile](https://github.com/kelott)_ - [LinkedIn](www.linkedin.com/in/kevin-ott-se)

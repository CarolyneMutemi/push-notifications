// Import the Firebase scripts needed to handle background messages
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js';

// // Initialize Firebase app inside the service worker
// const firebaseConfig = {
//   apiKey: "AIzaSyBbS2HTznX3REWTDCPkFmC6bCAoLh3uH3E",
//   authDomain: "syla-plus.firebaseapp.com",
//   projectId: "syla-plus",
//   storageBucket: "syla-plus.firebasestorage.app",
//   messagingSenderId: "376487359586",
//   appId: "1:376487359586:web:b7851314fbaaf72db3cd3b",
//   measurementId: "G-6N780F2CJJ"
// };

// const app = initializeApp(firebaseConfig);

// const messaging = getMessaging(app);

// Optional: Handle background message
// messaging.onBackgroundMessage((payload) => {
//     console.log("Received background message: ", payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: "./two.jpg",
//     };
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });


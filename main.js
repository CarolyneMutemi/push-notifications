import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbS2HTznX3REWTDCPkFmC6bCAoLh3uH3E",
  authDomain: "syla-plus.firebaseapp.com",
  projectId: "syla-plus",
  storageBucket: "syla-plus.firebasestorage.app",
  messagingSenderId: "376487359586",
  appId: "1:376487359586:web:b7851314fbaaf72db3cd3b",
  measurementId: "G-6N780F2CJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// messaging.requestPermission()
// .then(() => {
//   console.log('Notification permission granted.');
//   return messaging.getToken();
// })
// .then((token) => {
//   console.log('FCM Token:', token);
//   document.getElementById('tokenMessage').innerText = `FCM Token:\n${token}`;
//   // sendTokenToBackend(token);
// })
// .catch((error) => {
//   console.error('Error getting FCM token:', error);
// });





// Request permission and get token
async function initFCM() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted");
      const token = await getToken(messaging, { vapidKey: "BNXMTDcfpU_6uv9hEE4lF1i8ScdHTutv8r5J_yF10uPhez6grOTwfGofH9Fw2O_3lVQ9l68xD7BnUgv6JJ6N760" });
      console.log("FCM Token:", token);
      document.getElementById("tokenMessage").innerText = `FCM Token:\n${token}`;
      await sendTokenToBackend(token);
    } else {
      console.error("Notification permission not granted");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
}

// Send the token to the backend
async function sendTokenToBackend(token) {
  await fetch("http://localhost:8000/send-notification", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token, title: "Hello", body: "Welcome to Syla Plus" }),
  });
}

document.getElementById("subscribe").addEventListener("click", initFCM);

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./two.jpg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// // Handle incoming messages
// onMessage(messaging, (payload) => {
//   console.log("Message received: ", payload);
//   displayNotification(payload.notification);
// });

// // Display Notification in the UI
// function displayNotification(notification) {
//   const notificationContainer = document.getElementById("notificationContainer");
//   const messageElement = document.createElement("div");
//   messageElement.className = "notification";
//   messageElement.innerHTML = `<h4>${notification.title}</h4><p>${notification.body}</p>`;
//   notificationContainer.appendChild(messageElement);
// }

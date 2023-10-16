
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
      import { getDatabase, set, ref, get, query, equalTo } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
      import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyAf3VgZl7vhlIlNIswDs3fxIjpF30p2TKA",
        authDomain: "tournament-user-login-page.firebaseapp.com",
        databaseURL: "https://tournament-user-login-page-default-rtdb.firebaseio.com",
        projectId: "tournament-user-login-page",
        storageBucket: "tournament-user-login-page.appspot.com",
        messagingSenderId: "644261178840",
        appId: "1:644261178840:web:c2a7cbaa6fb35a3a4dd6ad"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const auth = getAuth();
      export{database,app,auth};
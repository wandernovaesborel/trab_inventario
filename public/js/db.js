// Configuração do Firebase
const firebaseConfig = {
	apiKey: "AIzaSyCS7_vKtYKJfIK2B_rY-6Li4qGONysAYbw",
	authDomain: "organizeja-27c38.firebaseapp.com",
	projectId: "organizeja-27c38",
	storageBucket: "organizeja-27c38.firebasestorage.app",
	messagingSenderId: "161096968948",
	appId: "1:161096968948:web:cbe33ad523f413a04a8ca1"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
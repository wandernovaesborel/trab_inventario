// auth.js
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // Usuário está logado
        console.log('Usuário logado:', user);
    } else {
        // Usuário não está logado
        window.location.href = 'login.html';
    }
});

// Verifique se o botão de logout existe antes de adicionar o ouvinte de evento
let logoutButton = document.getElementById('botaoLogout');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        firebase.auth().signOut().then(() => {
            window.location.href = 'login.html';
        });
    });
}
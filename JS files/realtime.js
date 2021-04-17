function toggleData(loggedIn, user) {
    if (loggedIn) {
        signedModal.style.display = "flex";
        signedModal.innerHTML = "Signed in as: <br> " + user.email + '<br>';
        signedModal.innerHTML += '<br><button id = "logOutButton" class = "accountButton" onclick="signOut()">Log Out</button>';
        console.log(user)
    } else {
        signedModal.style.display = "none";
    }
}
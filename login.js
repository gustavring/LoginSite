//variabler för rätt username/password
const correctUsername = "text";
const correctPassword = "1234";

//väntar på hela html dokumentet innan js körs
document.addEventListener("DOMContentLoaded", () => {
    console.log("sidan är laddad");

    //loginknappen lyssnar på click och input vad användaren skrev
    const loginBtn = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");

    //dem olika sidorna (menyn, vid rätt inlog och om det inte lyckades)
    const loginView = document.getElementById("login");
    const successView = document.getElementById("success");
    const failView = document.getElementById("fail");

    //hämtar försökigen knappen
    const tryAgainBtn = document.getElementById("tryAgainBtn");
    
    const logoutBtn = document.getElementById("logoutBtn");
    
    const togglePassword = document.getElementById("togglePassword");
    togglePassword.addEventListener("change", () => {
        passwordInput.type = togglePassword.checked? "text" : "password";
    })
    
    
    //se så att element hittades
    console.log("element hittades:");
    console.log(loginBtn);
    console.log(usernameInput);
    console.log(passwordInput);
    console.log(successView);
    console.log(failView);
    console.log(logoutBtn);
    console.log(togglePassword);
    
    
   
})
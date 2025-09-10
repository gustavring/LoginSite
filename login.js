//variabler för rätt username/password
const correctUsername = "test";
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
        passwordInput.type = togglePassword.checked? "test" : "password";
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

    

    loginBtn.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        //om username/password correct visa success
        if (username === correctUsername && password === correctPassword) {
            //visa success och göm login/fail
            loginView.style.display = "none";
            failView.style.display = "none";
            successView.style.display = "block";

        } else {
            //visa fail och göm login/success
            loginView.style.display = "none";
            successView.style.display = "none";
            failView.style.display = "block";
        }
    });


    //vid klick visas ENDAST menyn
    tryAgainBtn.addEventListener("click", () => {
        failView.style.display = "none";
        loginView.style.display = "block";
        usernameInput.value = "";
        passwordInput.value = "";
        usernameInput.focus();
    });

    //vid klick visas ENDAST menyn
    logoutBtn.addEventListener("click", () => {
        successView.style.display = "none";
        loginView.style.display = "block";
        usernameInput.value = "";
        passwordInput.value = "";
        usernameInput.focus();
    })
   
})
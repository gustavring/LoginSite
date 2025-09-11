

//väntar på hela html dokumentet innan js körs
document.addEventListener("DOMContentLoaded", () => {

    const user = {
        username: "test",
        password: "1234"
    };

    console.log("sidan är laddad");

    //loginknappen lyssnar på click och input vad användaren skrev
    const loginBtn = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");

    //dem olika sidorna (menyn, vid rätt inlog och om det inte lyckades)
    const loginView = document.getElementById("login");
    const successView = document.getElementById("success");
    const failView = document.getElementById("fail");

    //hämtar försök igen knappen
    const tryAgainBtn = document.getElementById("tryAgainBtn");
    
    //hämtar logga ut knappen
    const logoutBtn = document.getElementById("logoutBtn");
    
    //hämtar visa "knappen" (visar password i text eller punkt form)
    const togglePassword = document.getElementById("togglePassword");


    
    togglePassword.addEventListener("change", () => {
        passwordInput.type = togglePassword.checked? "text" : "password";
    });

    //visa success även vid refresh
    if (localStorage.getItem("isLoggedIn") === "true") {
        loginView.style.display = "none";
        failView.style.display = "none";
        successView.style.display = "block";
    }
    
    
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
        if (username === user.username && password === user.password) {

            localStorage.setItem("isLoggedIn", "true"); //inloggningsstatus
            localStorage.setItem("user", JSON.stringify(user));
            console.log("User från localStorage:", JSON.parse(localStorage.getItem("user"))); //visar user i console

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
        usernameInput.focus(); //fokus på användarnamn
    });

    //vid klick visas ENDAST menyn
    logoutBtn.addEventListener("click", () => {

        localStorage.clear(); //tömma local storage vid utlogg
        console.clear();
        console.log("Användaren har loggats ut.");

        successView.style.display = "none";
        loginView.style.display = "block";
        usernameInput.value = "";
        passwordInput.value = "";
        usernameInput.focus(); //fokus på användarnamn
    })
   
});
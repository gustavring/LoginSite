# LoginSite
Uppgift för en inloggningssida med username och password

HTML: 

I HTML skapade jag först ett skelett som består av 3 divvar, för att sedan i JavaScript kunna välja vem av dem som skulle synas beroende på vad användaren angivit. Skrev användaren in fel användarnamn eller lösenord dyker en ny vy upp och om allt är angivet rätt så dyker den vyn upp. Varje div har en knapp i sig som i sin tur ska göra att användaren ska kunna logga in, försöka igen eller logga ut.  

Jag valde även att lägga in en label med en input-checkbox för att kunna ändra från password format till text format på lösenords-inputen.   

Senare under uppgiftens gång (när jag hade fått den att funka) lade jag till bilder i divvarna för att style varje sida lite extra. Även en gemensam bild på alla av dem, som jag då istället lade i body för enkelhetens skull.  

 

JavaScript: 

Till en början hårdkodade jag värderna för username och password för att visa på vad programmet anses vara korrekt användare. Efter det började jag kalla på alla mina element med getElementById. Efter det kollade jag i console. Allt detta för struktur och för att se att jag fått tag på allt på rätt sätt innan jag fortsatt. 

För logga in knappen gjorde jag en EventListener med click, som jag sedan lade i en array med username/password value, där jag även lade in trim på username för att eventuella mellanslag inte skulle påverka programmet.  I den arrayen lade jag också in en if/else sats med if successView.style.display = “block”; och none på dem andra för att vid rätt inlogg visa att inloggning lyckades. Sedan i else, “block” på failView och none på de andra för att visa misslyckad inlogg.  

Tack vare divvarna i HTML så hamnar rätt knapp och andra element som h1 och p, in på rätt vy.  

För de andra knapparna använde jag mig av samma princip, vid klick visas den vy man vill komma åt, i detta fall menysidan. Vid försök igen visas menyvyn och även vid logga ut vyn. För både försök igen och logga ut knappen ligger username och password value på “” för att båda inputsen ska vara blanka när man tar sig tillbaka till den vyn. Jag lade också in focus på username inputen för att smidigt göra att användaren kan skriva där utan att behöva klicka. 

LocalStorage lade jag till när allt annat funkade som det skulle. Då i login arrayen valde jag setItem och user för att visa i localStorage att användaren blivit inloggad och även en true sats på loggedin. Detta för att vid refresh, så är användaren fortfarande inloggad. Till sist i logga ut arrayen lade jag till localStorage.clear för att rensa localStorage. Jag valde också att cleara consolen och skriva ut att användaren blivit utloggad. 

Css och bilderna gjorde jag för träning och kul 
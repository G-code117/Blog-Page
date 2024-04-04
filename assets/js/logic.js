const lightModeDarkMode = document.getElementById(".toggle")


const findMode = function(){
    const mode = localStorage.getItem("mode") || "darkMode";
    return mode;
}

const readLocalStorage = function(){
    const stringData = localStorage.getItem("blogs");

    const data = JSON.parse(stringData);

    return data || [];
}

const applyMode = function(mode){
    let icon, circleColor;

    console.log(mode);

    if(mode === "lightMode") {
        icon = "*";
        circleColor = "#blue";
    }
    else {
        icon ="🌙";
        circleColor = "#white";
    }

    lightModeDarkMode.textContent = icon,
    document.body.classList = mode,
    document.documentElement.style.setProperty("--accent-color", accentColor)
}

const saveMode = function(mode){
    localStorage.setItem("mode", mode);
}

const toggleTheme = function(){
    
    const mode = readLocalStorage();
    let newMode;

    if (mode === "lightMode"){
         newMode = "darkMode";
    } 
    else {
         newMode = "lightMode"
    }
    applyMode(newMode);

    saveMode(newMode);
}
applyMode(readLocalStorage());

lightModeDarkMode.addEventListener("click", toggleTheme);
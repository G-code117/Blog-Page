const lightModeDarkMode = document.getElementById("darkMode")

function findMode(){
    const mode = localStorage.getItem("mode") || "darkMode"
}

lightModeDarkMode.addEventListener("click", function(){
    let newMode

    if (mode === "darkMode"){
        let newMode = "lightMode";
    } 
    else( mode === "lightMode"){
        let newMode = "darkMode"
    }
});
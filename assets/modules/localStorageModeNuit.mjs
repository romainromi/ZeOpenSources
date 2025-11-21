export function storageDarkMode() {
    

const darkModeBtn = document.getElementById("dark-mode");
if (!darkModeBtn) return;


const modeStocker = localStorage.getItem("mode");

if(modeStocker){
    if(modeStocker === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}


darkModeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        darkModeBtn.textContent ='☀️'
    }else{
        localStorage.setItem("mode", "light");
        darkModeBtn.textContent='🌙'
    }
})
}

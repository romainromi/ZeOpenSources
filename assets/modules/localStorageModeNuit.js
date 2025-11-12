export function storageDarkMode() {
    

const darkModeBtn = document.getElementById("dark-mode");


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
    }else{
        localStorage.setItem("mode", "light");
    }
})
}


// const role = localStorage.getItem("role");
// if(role){
//     if(role === "admin") {
//         document.documentElement.classList.add("admin")
//     } if (role === "redacteur") {
//         document.documentElement.classList.add("redacteur")
//     } else {
//         document.documentElement.classList.add("user")
//     }
// }
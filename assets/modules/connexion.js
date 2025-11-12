// export function connexion(){
//     const loginForm = document.getElementById("loginForm")
//     const errorMsg = document.getElementById("error")

//     try {
//      const recupUsers =  await fetch ('../data/users.json')
        
//      if (!recupUsers.ok) throw new Error ("Erreur lors du chargement des données user.json")
        
//      const datas = await recupUsers.json();
     
//     datas.users.
    
//      if(loginForm){
//          loginForm.addEventListener("submit", function(e) {
//              e.preventDefault();
            
             
//          })
//      }
//     }
// }






// Test




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
import { navbar } from "./navbar.mjs";

export function header(){
    document.addEventListener('DOMContentLoaded', () => {

    
        const headerHTML = document.createElement('header')
        headerHTML.innerHTML = `
            <button class="navbar">
                <img src="/assets/img/menuBurger.png" alt="Menu burger" class="burger">
            </button>
            <h1><a href="/index.html" class="logo">ZeOpenSources</a></h1>
            <a href="/src/inscription.html" class="lien-profil"><img src="/assets/img/utilisateur.png" alt="Image de profil" class="profil"></a>
            `;

        document.body.prepend(headerHTML)
        navbar()
    })
}   



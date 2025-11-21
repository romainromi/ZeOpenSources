import { storageDarkMode } from "./localStorageModeNuit.mjs";

export function navbar() {
    
        const sidebar = document.createElement('aside');
        sidebar.className="sidebar"
        sidebar.innerHTML =`
            <div class="sidebar-content">
                <button id="dark-mode" class="darkmode-btn">🌙</button>

                <ul class="liens-nav">
                    <li><a href="../index.html">Accueil</a></li>
                    <li><a href="/src/pageArticle.html">Page Articles</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Crée un article</a></li>
                    <li><a href="/src/contact.html">Nous contactez</a></li>
                </ul>
            </div>   
        `;

        const overlay = document.createElement('div');
        overlay.className = "sidebar-overlay"
        document.body.appendChild(sidebar)
        document.body.appendChild(overlay)

        
        storageDarkMode()
        const boutonDarkmode = document.getElementById('dark-mode');
        boutonDarkmode.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        const btnBurger = document.querySelector(".navbar")

        btnBurger.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? "hidden" : "";
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = "";

        })

        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        })
    }
export async function afficherArticles(){
    try {
        const res = await fetch ('../../data/articles.json')
        if (!res.ok) throw new Error ("Erreur lors du chargement des données categorie.json")

        const data = await res.json();
        const container = document.getElementById("articleContainer")

        data.articles.slice(0, 4).forEach(a => {
            const card = document.createElement('article')
            card.className = "article"
            card.innerHTML = `
            <h2>${a.titre}</h2>
            <img src="${a.image}" alt="${a.contenu}"/>
            <p>${a.date_creation}</p>
            `
            container.appendChild(card)
        })
    } catch (error) {
        console.error("Erreur")
        
    }
}
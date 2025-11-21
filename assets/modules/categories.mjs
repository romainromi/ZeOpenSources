export async function afficherCategories(){
    try {
        const res = await fetch ('../data/categories.json')
        if (!res.ok) throw new Error ("Erreur lors du chargement des données categorie.json")

        const data = await res.json();
        const container = document.getElementById("categorieContainer")

        data.categories.slice(0, 4).forEach(a => {
            const card = document.createElement('article')
            card.className = "article"
            card.innerHTML = `
            <img src="${a.image}" alt="${a.nom}"/>
            <h2>${a.nom}</h2>
            `
            container.appendChild(card)
        })
    } catch (error) {
        console.error("Erreur")
        
    }
}
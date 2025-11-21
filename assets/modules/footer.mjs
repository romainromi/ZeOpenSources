export function footer(){
    const footer = document.createElement('footer')
    footer.innerHTML = `
    <p>Tout droits non reservé</p>
    <p class="titre-footer"><a href="/index.html">ZeOpenSources</a></p>
    <p><a href="/src/contact.html">Nous contacter</a></p>
    `;

    document.body.append(footer)
}
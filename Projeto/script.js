function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar_guilherme_molina.png")
        img.setAttribute("alt", "Foto de Guilherme Molina, sorri com os lábios, olhos castanhos escuros, rosto fino, barba e cabelo curto, veste uma camisa polo branca, fundo cinza.")
    }

}
const arrayBebida = [
    {
        image: "./img/img-bebidas/vinho-Aura-del_Sol.jpeg",
        texto: "Uma expressão encantadora da região vinícola do Vale Central do <strong>Chile</strong>. Combinando uvas cuidadosamente selecionadas, este vinho tinto revela notas intensas de frutas vermelhas maduras e sutis nuances de especiarias. Sua textura suave e final persistente tornam-no uma escolha excepcional para acompanhar pratos gourmet em nosso restaurante.",
    },

    {
        image: "./img/img-bebidas/vinho-Eclat-de_la_lune.jpeg",
        texto: "Vindo da a região vinícola francesa, este vinho branco revela uma palete de sabores frescos e frutados, com notas sutis de flores brancas e frutas cítricas. Sua textura é refinada e equilibrada, ideal para acompanhar pratos delicados e refinados. <strong>Éclat de Lune</strong> é a escolha perfeita para momentos especiais e refeições elegantes.",
    },

    {
        image: "./img/img-bebidas/vinho-riserva-doro.jpeg",
        texto: "O italiano <strong>Riserva d'Oro</strong> é um vinho de prestígio, conhecido por sua riqueza e complexidade. Produzido nas colinas ensolaradas da região da Toscana, este vinho tinto exibe um caráter encorpado com notas marcantes de frutas escuras, especiarias sutis e um toque de baunilha. Sua cor profunda e aroma sedutor prenunciam uma experiência sensorial única, ideal para acompanhar pratos refinados e momentos especiais.",
    },

    {
        image: "./img/img-bebidas/vinho-velluto-dorato.jpeg",
        texto: "Vindo da Argentina e muito bem conceituado, <strong>Velluto Dorado</strong> é conhecido por sua rica história e perfil de sabor único, sendo um favorito entre os entusiastas do vinho. Estou especialmente interessado em saber sobre sua cor, aroma, sabor e quaisquer características notáveis que o diferenciem",
    },

    {
        image: "./img/img-bebidas/vinho-fuego-estelar.jpeg",
        texto: "Experimente o encanto do Chile com o vinho <strong>Fuego Estelár</strong>, uma expressão vibrante da região do Vale Central. Este vinho tinto seduz com seus aromas intensos de frutas vermelhas maduras, como cerejas e amoras, complementados por sutis notas de especiarias. Na boca, é macio e equilibrado, com taninos suaves que levam a um final persistente e agradável. Ideal para acompanhar uma variedade de pratos, desde carnes grelhadas até massas e queijos suaves. Desfrute do sabor cativante deste vinho chileno e deixe-se levar pelas estrelas desta terra distante."
    }
]

// Criar elemento
const post = document.createElement("section")

// Manipular
post.innerHTML = `<img src="${arrayBebida[0].image}" alt="Vinho Aura del Sol" id="vinho">
<div id="text-drink">
    <p>${arrayBebida[0].texto}</p>
</div>
<img src="${arrayBebida[1].image}" alt="Vinho Éclat de La Lune" id="vinho">
<div id="text-drink">
    <p>${arrayBebida[1].texto}</p>
</div>
<img src="${arrayBebida[2].image}" alt="Vinho Riverva D'Oro" id="vinho">
<div id="text-drink">
    <p>${arrayBebida[2].texto}</p>
</div>
<img src="${arrayBebida[3].image}" alt="Vinho Velluto Dorado" id="vinho">
<div id="text-drink">
    <p>${arrayBebida[3].texto}</p>
</div>
<img src="${arrayBebida[4].image}" alt="Vinho Fuego Estelár" id="vinho">
<div id="text-drink">
    <p>${arrayBebida[4].texto}</p>
</div>
<button><a href="./menu.html">Menu</a></button>`
post.id = "post-1"

// Adicionar
const main = document.querySelector("main")
main.appendChild(post)
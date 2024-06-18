const arrayEntrada = [
    {
        image: "./img/img-entrada/carpaccio.jpg",
        texto: "Nosso <strong>Carpaccio de Salmão com Maracujá</strong> é uma entrada sofisticada e refrescante. O salmão fresco é cortado em lâminas finas e disposto artisticamente no prato. O molho de maracujá, feito com suco natural da fruta, proporciona uma explosão de sabor tropical. Para finalizar, adicionamos sementes de maracujá frescas, que conferem uma textura crocante e um toque visual vibrante. Uma combinação perfeita para os amantes de peixe cru e sabores intensos.",
    },

    {
        image: "./img/img-entrada/sopa_abobora.jpg",
        texto: "Delicie-se com nossa <strong>Sopa de Abóbora com Especiarias!</strong> Feita com abóbora moranga e japonesa,essa sopa é um verdadeiro abraço em forma de comida. O gengibre ralado e as especiarias, como cúrcuma e páprica picante, proporcionam um sabor picante e terroso, enquanto a cebola e o alho dão um toque aromático. Cozida até que a abóbora fique macia, nossa sopa é processada no liquidificador para obter uma textura suave e aveludada. Sirva com um fio de azeite e decore com salsa fresca.",
    },

    {
        image: "./img/img-entrada/Bruschettas-com-tomate-fresco.jpg",
        texto: "Nossas <strong>Bruschettas com Tomate Fresco</strong> são uma entrada irresistível, perfeita para qualquer ocasião. O pão italiano filão é dourado e crocante, enquanto o tomate fresco e os temperos adicionam um sabor vibrante.",
    },

    {
        image: "./img/img-entrada/camaroes-grelhados-01.jpg",
        texto: "Para voce se deleitar com nossos <strong>Camarões Grelhados</strong>,selecionamos cuidadosamente os frutos do mar para que se mantenham frescos e suculentos. Grelhamos cada camarão até que fiquem dourados e com marcas de churrasco, o molho de manga é uma sinfonia tropical. Mangas maduras são transformadas em um creme aveludado, com um toque de suco de limão fresco para equilibrar a doçura.",
    },

    {
        image: "./img/img-entrada/ostras-frescas-com-limao.jpg",
        texto: "Nossas <strong>Ostras</strong> são colhidas cuidadosamente das águas cristalinas da costa. Elas são servidas em sua concha, ainda banhadas pelo mar. A textura é suave e sedosa, e o sabor é uma sinfonia de salinidade e frescor. O toque cítrico do limão é a companhia perfeita para as ostras. Uma fatia fina de limão é colocada delicadamente sobre cada ostra, liberando seus óleos essenciais e realçando o sabor do mar. O molho mignonette é uma combinação clássica de vinagre, chalotas picadas e pimenta-do-reino. Ele é servido em uma pequena tigela ao lado das ostras. Mergulhe a ostra no molho antes de saboreá-la."
    }
]

// Criar elemento
const post = document.createElement("section")

// Manipular
post.innerHTML = `<img src="${arrayEntrada[0].image}" alt="Carpaccio de Salmão" id="prato">
<div id="text-drink">
    <p>${arrayEntrada[0].texto}</p>
</div>
<img src="${arrayEntrada[1].image}" alt="Sopa de Abóbora" id="prato">
<div id="text-drink">
    <p>${arrayEntrada[1].texto}</p>
</div>
<img src="${arrayEntrada[2].image}" alt="Bruschettas com tomate fresco" id="prato">
<div id="text-drink">
    <p>${arrayEntrada[2].texto}</p>
</div>
<img src="${arrayEntrada[3].image}" alt="Camarões Grelhados com Molho de Manga" id="prato">
<div id="text-drink">
    <p>${arrayEntrada[3].texto}</p>
</div>
<img src="${arrayEntrada[4].image}" alt="Ostras frescas com limão" id="prato">
<div id="text-drink">
    <p>${arrayEntrada[4].texto}</p>
</div>
<button><a href="./menu.html">Menu</a></button>`
post.id = "post-1"

// Adicionar
const main = document.querySelector("main")
main.appendChild(post)
const arraySobremesa = [
    {
        image: "./img/img-sobremesa/sobremesa01-torta_choc_belga.jpeg",
        texto: "Um delicioso corte de <strong>Torta de chocolate belga</strong>, feita com cacau de alta qualidade, coberto com raspas de chocolate meio amargo e acompanhado de uma bola de sorvete de baunilha artesanal, de cor branca pura, em um prato de porcelana preta.",
    },

    {
        image: "./img/img-sobremesa/sobremesa02-tartelette-de-limao-Siciliano.jpeg",
        texto: "Uma <strong>Tartelette de limão</strong> delicadamente equilibrada, com um recheio de creme de limão fresco e decorada com raspas de limão siciliano e uma pitada de açúcar de confeiteiro.",
    },

    {
        image: "./img/img-sobremesa/sobremesa03-Creme-Brulee-de-Lavanda.jpeg",
        texto: "<strong>Crème Brûlée de Lavanda</strong> um clássico francês com um toque sofisticado de lavanda, apresentando uma textura cremosa e sutil aroma floral, finalizado com uma fina camada de açúcar caramelizado.",
    },

    {
        image: "./img/img-sobremesa/torta-de-chocolate-com-calda.jpg",
        texto: "<strong>Torta de chocolate com calda de caramelo</strong> - Começamos com uma base crocante e irresistível. Trituramos biscoitos de chocolate até obtermos uma textura fina e misturamos com manteiga derretida e preparamos um caramelo dourado e sedoso. O açúcar é derretido até atingir uma cor âmbar, e então adicionamos creme de leite fresco e uma pitada de flor de sal. Nossa ganache é feita com chocolate amargo picado e creme de leite fresco. O chocolate é derretido e misturado com o creme até obtermos uma textura lisa e brilhante.",
    },

    {
        image: "./img/img-sobremesa/mousse-maracuja.jpg",
        texto: "<strong>Mousse de Maracujá</strong> - Nosso mousse de maracujá é uma combinação perfeita de suavidade e acidez. A textura é leve e aerada, derretendo na boca como um abraço tropical. Utilizamos suco de maracujá fresco para criar a base do mousse. A acidez característica da fruta é equilibrada com o doce do leite condensado e do creme de leite."
    }
]

// Criar elemento
const post = document.createElement("section")

// Manipular
post.innerHTML = `<img src="${arraySobremesa[0].image}" alt="Torta de Chocolate Belga" id="sobremesa-01">
<div id="text-drink">
    <p>${arraySobremesa[0].texto}</p>
</div>
<img src="${arraySobremesa[1].image}" alt="Tartelette de Limão Siciliano" id="sobremesa-01">
<div id="text-drink">
    <p>${arraySobremesa[1].texto}</p>
</div>
<img src="${arraySobremesa[2].image}" alt="Crème Brûlée de Lavanda" id="sobremesa-01">
<div id="text-drink">sobremesa-01
    <p>${arraySobremesa[2].texto}</p>
</div>
<img src="${arraySobremesa[3].image}" alt="Torta de chocolate com calda de caramelo" id="sobremesa">
<div id="text-drink">
    <p>${arraySobremesa[3].texto}</p>
</div>
<img src="${arraySobremesa[4].image}" alt="Mousse de maracujá" id="sobremesa">
<div id="text-drink">
    <p>${arraySobremesa[4].texto}</p>
</div>
<button><a href="./menu.html">Menu</a></button>`
post.id = "post-1"

// Adicionar
const main = document.querySelector("main")
main.appendChild(post)
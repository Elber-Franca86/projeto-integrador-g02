const arrayPrato = [
    {
        image: "./img/img-prato-princ/file-mingnon.jpg",
        texto: "<strong>Filé mignon</strong> - Nossos chefs selecionam os melhores cortes para criar estaobra-prima. O molho de v inho tinto é a estrela deste prato. Preparamos um molho rico e encorpado, usando um vinho tinto seco de alta qualidade. Na mesma frigideira em que grelhamos os filés, adicionamos cebola picadinha e alho, criando uma base aromática.",
    },

    {
        image: "./img/img-prato-princ/risoto.jpg",
        texto: "<strong>Risoto de cogumelos com trufas</strong> - Os Cogumelos porcini, shiitake e shimeji se unem em uma dança de sabores e texturas. Eles são refogados até liberarem seus aromas terrosos e se tornarem macios. Utilizamos arroz carnaroli, conhecido por sua capacidade de absorver líquidos e criar uma textura cremosa. O arroz é refogado com cebola e alho, criando a base perfeita para o risoto. Um toque de vinho branco é adicionado ao arroz, evaporando para deixar apenas sua essência. A estrela deste prato é o azeite de trufas. Ele é delicadamente regado sobre o risoto, liberando seu aroma.Finalizamos com queijo grana padano ralado na hora. Sua textura granulada e sabor salgado complementam os cogumelos e o arroz.",
    },

    {
        image: "./img/img-prato-princ/carre-de-cordeiro.jpg",
        texto: "<strong>Carré de cordeiro</strong> - Nossos chefs selecionam cuidadosamente o Carré, com seus três ossinhos, garantindo a máxima qualidade , o carré é temperado com sal e pimenta-do-reino. A estrela deste prato é a crosta de ervas frescas. Nossos chefs picam finamente tomilho, salsa e alho, criando uma mistura aromática.",
    },

    {
        image: "./img/img-prato-princ/Tornedor-de-File-com-Foie-Gras.jpg",
        texto: "<strong>Tornedor de Filé com Foie Gras</strong> - Buscamos melhores cortes de filé mignon para criar os tornedores. Cada pedaço é alto e suculento, garantindo uma experiência memorável. O foie gras, também conhecido como fígado de pato ou ganso, é uma iguaria luxuosa. O sabor é rico, com notas de nozes e um toque adocicado.",
    },

    {
        image: "./img/img-prato-princ/salmao-grelhado.jpg",
        texto: "<strong>Salmão grelhado com purê de batata doce</strong> - Nossos chefs selecionam os melhores filés de salmão para criar essa obra-prima. Cada pedaço é grelhado até ficar dourado por fora e incrivelmente macio por dentro. A carne é suculenta e repleta de sabor marinho. Nosso purê é feito com batata-doce laranja, cozida até ficar macia e amassada até obter uma textura cremosa."
    }
]

// Criar elemento
const post = document.createElement("section")

// Manipular
post.innerHTML = `<img src="${arrayPrato[0].image}" alt="Prato Principal" id="prato">
<div id="text-drink">
    <p>${arrayPrato[0].texto}</p>
</div>
<img src="${arrayPrato[1].image}" alt="Prato Principal" id="prato">
<div id="text-drink">
    <p>${arrayPrato[1].texto}</p>
</div>
<img src="${arrayPrato[2].image}" alt="Prato Principal" id="prato">
<div id="text-drink">
    <p>${arrayPrato[2].texto}</p>
</div>
<img src="${arrayPrato[3].image}" alt="Prato Principal" id="prato">
<div id="text-drink">
    <p>${arrayPrato[3].texto}</p>
</div>
<img src="${arrayPrato[4].image}" alt="Prato Principal" id="prato">
<div id="text-drink">
    <p>${arrayPrato[4].texto}</p>
</div>
<button><a href="./menu.html">Menu</a></button>`
post.id = "post-1"

// Adicionar
const main = document.querySelector("main")
main.appendChild(post)
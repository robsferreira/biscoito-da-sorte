const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const bntTry = document.querySelector("#bntTry");
let menu = document.querySelector("main");

let listLuck = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam: a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
    'O riso é a menor distância entre duas pessoas.',
]

function closedCookie(event) {
    event.preventDefault()
    console.log("biscoito aberto")
    menu.style.height = "554px";
    toggleScreen()
    screen2.querySelector("#closedCookie").innerHTML = listLuck[random]
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

bntTry.addEventListener("click", function() {
    toggleScreen()
    random = Math.floor(Math.random() * listLuck.length)
    menu.style.height = "424px";
})

let random = Math.floor(Math.random() * listLuck.length)
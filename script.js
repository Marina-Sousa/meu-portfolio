const nome = "Marina";
const idade = 27;
const cidade = "Vancouver";
const estaEstudandoFullStack = true;
const linguagens = ["C", "Python"];
const perfil = { nome: "Marina", idade: 27, curso: "computação" };

async function buscarPiada() {
    try {
        const resposta = await fetch("https://official-joke-api.appspot.com/random_joke");
        const dados = await resposta.json();

        document.getElementById("piada-texto").innerText = dados.setup;
        document.getElementById("piada-resposta").innerText = dados.punchline;
    } catch (erro) {
        console.log("Erro ao buscar piada:", erro);
    }
}

buscarPiada();
const button = document.querySelector("#buttonpiada")
button.addEventListener("click", buscarPiada);
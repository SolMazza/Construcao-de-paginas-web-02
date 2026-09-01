let titulo = document.getElementById("titulo");
let texto = document.querySelector(".texto");
let lista = [];
let ul = document.getElementById("lista");
let contador = 1;
    
titulo.textContent = "Livraria Sistema";
texto.textContent = "O que Todo Pedadogo Deveria Saber Sobre LIBRAS";

console.log(titulo);
console.log(texto);

function adiocionar() {

    let cadernoDeFormacao = "Caderno de Formação ${contador}";
    
    ul.appendChild(document.createAttribute("li")).textContent = cadernoDeFormacao;


    lista.push(cadernoDeFormacao);
}
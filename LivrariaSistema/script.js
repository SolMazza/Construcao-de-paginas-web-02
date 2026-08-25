const { createElement } = require("react");

//Variavel Global, array de objetos livros
var books = []

function save() {

    //Salvando a Div do html
    const divPrincipal = document.getElementById("resultSave");

    //Colocando a lista de books dentro do <dl> da div 
    books = createElement("dl");
    divPrincipal.appendChild(books);

    //variavel para capturar os titutlo e ano digitado
    let inputTitle = document.getElementById("inputTitle").value;
    let inputYear = document.getElementById("inputYear").value;

    //cria um livro como objeto
    let book = {
        "title": inputTitle,
        "year": inputYear,
    }

    //coloca livro no array(lista)
    books.push(book);


    divPrincipal.appendChild()

    //coloca um array(lista) de livros no localStorage do navegador, JSON.stringify Transforma objeto em json
    localStorage.setItem("books", JSON.stringify(books));

}


function show() {

    for (const book in books) {

        if (tarefaTexto.trim() !== "") {
            const novaTarefa = document.createElement("li");
            novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">Excluir</button>`;
            books.appendChild(novaTarefa);
            tarefaInput.value = "";
        }

        document.getElementById("listResult").textContent += books[book].title;
        document.getElementById("yearResult").textContent += books[book].year;
    }
}
books.forEach(show);

function load() {
    //recupera o array de livros do localStorage e coloca numa variavel
    let strBooks = localStorage.getItem("books");

    if (strBooks !== null) {
        //Json.parse converte string para objeto JSON
        books = JSON.parse(strBooks);
    }
    show(books);
}

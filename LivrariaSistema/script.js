
var books = [];

//Salvando a Div do html
let divPrincipal = document.getElementById("resultSave");

function save() {

    //variavis para capturar os titutlo e ano digitado
    let inputTitle = document.getElementById("inputTitle").value;
    let inputYear = document.getElementById("inputYear").value;


    if (inputTitle.trim() == "") {
        alert(`digite o título!`)
    }

    if (inputYear.trim() == "") {
        alert(`digite o Ano!`)
    }

    // Cria o objeto livro
    let book = {
        title: inputTitle,
        year: inputYear
    };



    // Adiciona o livro ao array
    books.push(book);

    //coloca um array(lista) de livros no localStorage do navegador, JSON.stringify Transforma objeto em json
    localStorage.setItem("books", JSON.stringify(books));
}
function show() {

    let contadorLivros = document.getElementById("bookCont");
    contadorLivros.textContent = `${books.length} ${books.length == 1 ? " Livro" : " Livros"}`;

    // Limpa o conteúdo anterior
    listaPrincipal.textContent = "";

    // Cria o <dl>
    const dlList = document.createElement("dl");
    listaPrincipal.appendChild(dlList);

    books.forEach((book, index) => {

        const dtTitle = document.createElement("dt");
        const ddYear = document.createElement("dd");

        let title = book.title.trim();
        let year = book.year.trim();

        dtTitle.id = `titleResult${index}`;
        dtTitle.textContent = title;
        dlList.appendChild(dtTitle);

        ddYear.id = `yearResult${index}`;
        ddYear.textContent = year;
        dtTitle.appendChild(ddYear);

    });
}



function load() {
    //recupera o array de livros do localStorage e coloca numa variavel
    let strBooks = localStorage.getItem("books");

    if (strBooks !== null) {
        //Json.parse converte string para objeto JSON
        books = JSON.parse(strBooks);
    }
    show(books);
}
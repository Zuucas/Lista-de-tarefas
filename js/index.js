let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    //pegar o valor digitado no input
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        
        ++contador;
        
        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="material-icons">
                radio_button_unchecked
            </i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="material-icons">
                delete
            </i> Deletar</button>
        </div>
    </div>`;
        //adiciona o novo item no main
        main.innerHTML += novoItem;

    }

    input.value ="";
    input.focus();

}
function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
    console.log("deletou");
}

function marcarTarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if (classe === "item"){
        item.classList.add('clicado');

        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('radio_button_unchecked');
        icone.classList.add('clicked');        
    } else{ item.classList.remove('clicado');

    let icone = document.getElementById('icone_' + id);
    icone.classList.remove('clicked');
    icone.classList.add('item-icone');    
    }  
}
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
        }
    })


//Bloco de verificação de preenchimento de campos 

function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    
    if(!user || !senha ){
       alert("campos de preenchimento obrigatório. Favor preencher!");
    }else{
        window.location.href = "aula2.html"
    }
}
/*FUNÇÃO PARA CRIAR A LISTA DE USUÁRIOS */
/*
--->Cria o Array para armazenar os úsuarios
*/
var dadosLista = [];
function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    if (nomeUser) {
    dadosLista.push(nomeUser);
    criarLista();
    document.getElementById("nomeUser").value = '';
     }
}
function criarLista(){

let table = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

for(let i=0; i <= (dadosLista.length-1); i++){

    table += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onlick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";

    document.getElementById('tabela').innerHTML = table;

}

}
//Função para a edição da array

function editar(i){
document.getElementById('nomeUser').value = dadosLista[(i - 1)];
dadosLista.splice(dadosLista[(i - 1), 1]);
}

//Função para o exclusão da array

function excluir(i){
dadosLista.splice((i - 1), 1);
document.getElementById("tabela").deleteRow(i);
}

const form = document.getElementById('formulario');
const img =`<img src="imagens/pessoa.png" alt="icone de pessoa">`;
const nomes = [];
const numeros = [];
let linhas = '';
const Nome = document.getElementById('nome');
const Numero = document.getElementById('numero');
const Erro =document.querySelector('.erro');


form.addEventListener('submit', function(e){
    e.preventDefault();


    
    AtualizaLinha();
    AdicionaLinha();
})


Numero.addEventListener('input', function(){
    const maxDigtis = 11;
    const valorNumerico = Numero.value;

    if(valorNumerico > maxDigtis){
        Numero.value = valorNumerico.slice(0, maxDigtis);
    }

    mensagemErro();

});


function AtualizaLinha(){
const ValorNumero = parseFloat(Numero.value);

    
    if (ValorNumero.toString().length >= 11 && !numeros.includes(ValorNumero)){
        
        nomes.push(Nome.value);
        numeros.push(parseFloat(Numero.value));
        let linha = '';
        
        linha = '<tr>';
        linha += `<td>${img}</td>`
        linha += `<td>${Nome.value}</td>`
        linha += `<td>${Numero.value}</td>`
        linha += '</tr>'
        linhas += linha;

    }
    
    





}




function AdicionaLinha(){
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}

function mensagemErro(){
    const ValorNumero =parseFloat(Numero.value);
    
    
    
    
    if(ValorNumero.toString().length < 11){
        Erro.style.display = 'block';
    } else{
        Erro.style.display = 'none';
    }

}
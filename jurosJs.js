// Objeto que quarda os calculos e as variaveis que serão usadas.
const juroSimples = {
    capital: 0,
    tempo: 0,
    taxa: 0,
    calc_percent: function () {
        return this.taxa / 100;
    },
    calc_juros: function (){
        return this.capital * this.calc_percent() * this.tempo;
    },
    acumulo: function () {
        return this.capital + this.calc_juros();
    }
}

//Pesquisar sobre funções com muitas responsabilidades.

function executar() {
    //Refatorar codigo usando querySelectorAll para reduzir linhas de código.
    //Pegar os input no html:
    var getCapitalInput = document.getElementById('inputCapital').value;
    var getPercentInput = document.getElementById('inputPercent').value;
    var getTempoInput = document.getElementById('inputTempo').value;

    //Pegar elementos da tabela:
    var getTableCapital = document.getElementById('tableCapital');
    var getTableTempo = document.getElementById('tableTempo');
    var getTableTaxa = document.getElementById('tableTaxa');
    var getTableRetorno = document.getElementById('tableRetorno');
    var getTableAcumulo = document.getElementById('tableAcumulo');
    
    //Converter o valor dos inputs que são strings em valores numericos:
    var convertCapitalInput = Number(getCapitalInput);
    var convertPercentInput = Number(getPercentInput);
    var convertTempoInput = Number(getTempoInput);

    //Criar condição para verificar se os campos estão vazios:
    const diferentOfNumber = convertCapitalInput == 0 || convertPercentInput == 0 || convertTempoInput == 0;

    if (diferentOfNumber) {
        window.alert('Campos vazios, corrija e tente novamente.');
        
    }
    //Fazer o objeto juroSimples receber os valores dos inputs capturados.
    juroSimples.capital = convertCapitalInput;
    juroSimples.tempo = convertTempoInput;
    juroSimples.taxa = convertPercentInput;

    //Exibir os resultados:
    getTableCapital.innerHTML = juroSimples.capital;
    getTableTempo.innerHTML = juroSimples.tempo;
    getTableTaxa.innerHTML = Math.floor(juroSimples.calc_percent());
    getTableRetorno.innerHTML = Math.trunc(juroSimples.calc_juros());
    getTableAcumulo.innerHTML = Math.ceil(juroSimples.acumulo());

    
}

//Criar função para resetar os valores Ex-Name: resetar:
function resetar() {

    //Pegar os input no html:
    var getAllInput = document.querySelectorAll('input');

    // Para resetar verificar se é diferente de 0 ou vazio.
    var diferentOfNull = getAllInput.value != "" || getAllInput != 0 
    if (diferentOfNull) {

        getAllInput.forEach(item => item.value = "")
        
    }
    console.log(resetar())
}


function loadDrugs(){
    alert("chamou a função");
    
    $.getJSON("medicamentos.json", function(data) {
        medicamentos = data;
        var saida= '';

        for(i=0; i < 2; i++){
            console.log(medicamentos[i].PRODUTO);
            saida += medicamentos[i].PRODUTO;
        }
        document.getElementById('tela').innerHTML = 'funcionou';
    });
    

    //var dados = JSON.parse(medicamentos);
    alert("hello");
    document.getElementById('tela').innerHTML = saida;
}
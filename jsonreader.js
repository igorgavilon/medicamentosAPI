function loadDrugs(){
    
    var url_string = window.location.href;
    var url = new URL(url_string);
    var searchTerm = url.searchParams.get("search");
    
    $.getJSON("medicamentos.json", function(data) {
        medicamentos = data;
        var saida= '';
        saida += searchTerm;
        saida += "</BR>";
        for(i=0; i < 2; i++){
            console.log(medicamentos[i].PRODUTO);
            saida += medicamentos[i].PRODUTO;
            saida += "</BR>";
        }
        alert("Entrou no getJSON");
        document.getElementById('tela').innerHTML = saida;
    });
}
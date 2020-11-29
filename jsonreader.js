function loadDrugs(){
    
    var url_string = window.location.href;
    var url = new URL(url_string);
    var searchTerm = url.searchParams.get("search");
    var saida = [];

    if(searchTerm != null){
        if(searchTerm != ""){
            $.getJSON("medicamentos.json", function(data) {
                medicamentos = data;
                saida += searchTerm;
                saida += "</BR>";
                for(i=0; i < 2; i++){
                    saida += (medicamentos[i]);
                    saida += "</BR>";
                }
                alert("Entrou no getJSON");
            });
        }else{
            saida = "termo da pesquisa não informado (em branco)!";
        }
    }else{
        saida = "termo da pesquisa não informado (null)!";
    }
    document.getElementById('tela').innerHTML = saida;

}
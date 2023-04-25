function procurar(){
    var entrada, filtro, tabela, tr, td, i, txtValue;

    entrada = document.getElementById("input-search");
    filtro = entrada.value.toUpperCase();
    tabela = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for(i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[2];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filtro) > -1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
}
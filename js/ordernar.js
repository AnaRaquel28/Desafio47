function ordernarTabelaNumeros(coluna){
    var tabela, linhas, comutacao, i, x, y, isSwitch, dir, count_switch = 0;

    tabela = document.getElementById("table");
    comutacao = true;
    dir = "asc";

    while(comutacao){
        comutacao = false;
        linhas = tabela.rows;

        for(i = 1; i < (linhas.length - 1); i++){
            isSwitch = false;
            
            x = linhas[i].getElementsByTagName("td")[coluna];
            y = linhas[i + 1].getElementsByTagName("td")[coluna];

            if(dir == "asc"){
                if(parseFloat(x.innerHTML.replace(/,/g, ".")) > parseFloat(y.innerHTML.replace(/,/g, "."))){
                    isSwitch = true;
                    break;
                }
            }
            else if(dir == "desc"){
                if(parseFloat(x.innerHTML.replace(/,/g, ".")) < parseFloat(y.innerHTML.replace(/,/g, "."))){
                    isSwitch = true;
                    break;
                } 
            }
        }

        if(isSwitch){
            linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
            comutacao = true;
            count_switch++;
        }
        else{
            if(count_switch == 0 & dir == "asc"){
                dir = "desc";
                comutacao = true;
            }
        }
    }
}

function ordernarTabelaNomes(coluna){
    var tabela, linhas, comutacao, i, x, y, isSwitch, dir, count_switch = 0;

    tabela = document.getElementById("table");
    comutacao = true;
    dir = "asc";

    while(comutacao){
        comutacao = false;
        linhas = tabela.rows;

        for(i = 1; i < (linhas.length - 1); i++){
            isSwitch = false;
            
            x = linhas[i].getElementsByTagName("td")[coluna];
            y = linhas[i + 1].getElementsByTagName("td")[coluna];

            if(dir == "asc"){
                if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                    isSwitch = true;
                    break;
                }
            }
            else if(dir == "desc"){
                if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                    isSwitch = true;
                    break;
                }
            }
        }

        if(isSwitch){
            linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
            comutacao = true;
            count_switch++;
        }
        else{
            if(count_switch == 0 & dir == "asc"){
                dir = "desc";
                comutacao = true;
            }
        }
    }
}
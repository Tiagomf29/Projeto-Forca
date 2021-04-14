
var lista = [];

window.onload = function(){
    let palavra = "Tiago Martins Ferreira";

    for(let i = 0; i < palavra.length; i++){

        lista[i] = palavra.charAt(i);
        insereCelula(palavra.charAt(i));

    }

    incluiLetra(0,"C");
    incluiLetra(5,"C");
};


function insereCelula(letra){

    var t = document.querySelector("tr");
    var linha = document.createElement("td");    
    if(letra == " "){
        var texto = document.createTextNode("-");
        linha.appendChild(texto);
        linha.style.textAlign="center";
        linha.style.backgroundColor="yellow";
    }
    t.insertBefore(linha, t.firstChild);
    
}


function incluiLetra(posicao, letra){

    let linhaTabela = document.querySelectorAll("td");

    linhaTabela.forEach((vlr,index) =>{
        if(index==posicao){
            let texto = document.createTextNode(letra);            
            linhaTabela[index].appendChild(texto); 
            linhaTabela[index].style.textAlign="center";     
        }
    });

}
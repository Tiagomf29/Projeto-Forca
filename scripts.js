
var lista = [];
var erro = 1;

window.onload = function(){
    
	let palavra = "TESTE";
    for(let i = 0; i < palavra.length; i++){
        lista[i] = palavra.charAt(i);
        insereCelula(palavra.charAt(i),i);       
    }
    eventosBotoes();
};

function validaSeVenceuOJOgo(){

    let ok = document.querySelectorAll("td");
    let naoFaltaValor = true;
    ok.forEach(vlr =>{
        if(vlr.textContent == ""){
            naoFaltaValor = false;
        }
    });
	
	if(naoFaltaValor){
      mensagemTerminoJogo("Parabéns. Você venceu o jogo!!!")
    }
}


function insereCelula(letra,posicao){

    var t = document.querySelector("tr");
    var linha = document.createElement("td");    
    if(letra == " "){
        var texto = document.createTextNode("-");
        linha.appendChild(texto);
        linha.style.textAlign="center";
        linha.style.backgroundColor="yellow";
    }   
    
    t.appendChild(linha, t.firstChild);
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

function eventosBotoes(){

    let botoes = document.querySelectorAll("input");
    botoes.forEach(btn=>{
        btn.addEventListener('click', e =>{          
            verificaExistenciaLetra(btn.value);
            btn.disabled="disabled";
        });
    });
}


function verificaExistenciaLetra(letra){

    let achou = false;
    for(let i = 0; i < lista.length; i++){
        if(lista[i].toLowerCase() == letra.toLowerCase()){
            incluiLetra(i,letra);
            achou = true;
            lista[i]=" ";
        }
    }

    if(!achou){
        exibeImagem(erro);
    }

    validaSeVenceuOJOgo();
}

function exibeImagem(membro){

    switch (membro) {
        case 1:
            document.getElementById("corda").style.display = "flex"; 
            erro+=1;          
            break;
        case 2:
            document.getElementById("cabeca").style.display = "flex";             
            erro+=1;
            break;
        case 3:
            document.getElementById("corpo").style.display = "flex";             
            erro+=1;
            break;
        case 4:
            document.getElementById("mao-direita").style.display = "flex";             
            erro+=1;
            break;
        case 5:
            document.getElementById("mao-esquerda").style.display = "flex";             
            erro+=1;
            break;
        case 6:
            document.getElementById("pe-direito").style.display = "flex";             
            erro+=1;
            break;
        case 7:
            document.getElementById("pe-esquerdo").style.display = "flex";            
            erro+=1;
            mensagemTerminoJogo("Não foi desta vez! Você perdeu.");
            desabilitaTodosBotoes();
            break;                                                                        
    }

}


function mensagemTerminoJogo(mensagem){

    let msg = document.getElementById("mensagem");    
    msg.innerHTML = mensagem;
    msg.style.fontSize = "40px";
    msg.style.color = "red";

    let divisao = document.getElementById("mensagemFinal");    
    divisao.style.fontSize = "40px";
    divisao.style.position = "absolute";
    divisao.style.top = "40%";
    divisao.style.left = "30%";
    divisao.style.backgroundColor = "yellow";
    divisao.style.borderRadius = "30px";
}

function desabilitaTodosBotoes(){

    let desabilita = document.querySelectorAll("input");
    desabilita.forEach(dsb=>{
        dsb.disabled = "disabled";
    });
}



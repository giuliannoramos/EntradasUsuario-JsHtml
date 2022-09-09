function NovaEntrada() {    

    var form = document.querySelector('#form');

    var entrada = document.createElement('input');
    entrada.type = 'n1';
    entrada.classList.add('entrada');

    var botao = document.createElement('input');
    botao.type = 'button';
    botao.value = '+';
    
    botao.onclick = NovaEntrada;
    form.appendChild(entrada);
    form.appendChild(botao);
    Somar();
}

function Somar()
{
    var form = document.querySelectorAll('.entrada');    

    let somatorio = 0;
    
    form.forEach(function(e){
       if(e.value !== '') {
        somatorio+= parseInt(e.value); 
       }        
    });
    alert(somatorio);
    let divRes = document.querySelector('#dadosSalvos');
    divRes.innerHTML = '<h1>'+somatorio+'</h1>'
}

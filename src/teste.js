ligou = (valor) =>{
  var OperadorEscolhido = document.getElementById('tela');
  OperadorEscolhido.style.background  = 'rgb(5, 145, 5)';
  OperadorEscolhido.value += valor.textContent;

  if(OperadorEscolhido.value == 'ON'){
    OperadorEscolhido.value = 0;
    numeroDigitado = (numero) =>{
      var pegarValor = document.getElementById('tela');
      pegarValor.value += numero.textContent;
    }
    
    operadorClic = (operador) =>{
      var OperadorEscolhido = document.getElementById('tela');
      OperadorEscolhido.value += operador.textContent;
    }
    
    calcular = ()=>{
    try {  
        var resultado = document.getElementById('tela');
        
        if(resultado.value != null){
       var calculoOperacao = eval(resultado.value);
       resultado.value = calculoOperacao;
      }
    }catch (error){
      resultado.value = 'Error';  
    }
    
    }
    limpar = () =>{
      limparTela = document.getElementById('tela');
      limparTela.value = '';
    }
      
    removerUltimoNumero= () =>{
      removerUltimo = document.getElementById('tela');
      removerUltimo.value = removerUltimo.value.substring(0, removerUltimo.value.length - 1);
    }

    numDecimal = (valor) =>{
      var decimal = document.getElementById('tela');
      decimal.value += valor.textContent;
      
    }
  }
}


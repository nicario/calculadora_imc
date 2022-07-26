let button = document.querySelector(".button__body");


button.addEventListener("click", function(){
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value; 
  const div = document.querySelector(".div__body");

  if(nome !== '' && altura !== '' && peso !== ''){
    let valorIMC = (peso / (altura*altura)).toFixed(1);

    let classificacao = '';
    if(valorIMC < 18.5){
      classificacao = 'abaixo do peso.'
    }else if(valorIMC < 25){
      classificacao = 'com o peso ideal.Parabens!'
    }else if(valorIMC < 30){
      classificacao = 'com obesidade grau I.'
    }else if(valorIMC < 35){
      classificacao = 'com obesidade grau II.'
    }else{
      classificacao = 'com obesidade grau III. Cuidado!'
    }
    div.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} `
  }else {
    div.textContent = "Preencha todos os campos!"
  }
});
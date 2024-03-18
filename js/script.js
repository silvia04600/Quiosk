

var n1 =document.querySelector('#n1')
var n2 =document.querySelector('#n2')
var resultado =document.querySelector('span')

function somar(){
  resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);

}

function subtrair(){
  resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value);
}

function multiplicar(){
  resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);
}

function dividir(){
  resultado.innerHTML = parseInt(n1.value) / (n2.value);
}

function Limpar(id1, id2){
  document.getElementById(id1).value=""
  document.getElementById(id2).value=""


}




var A = 10;
var B = 20;

if(B > A) {
  console.log('B é maior que A');
}
let userLog = document.getElementById("usuario");
let senhaLog = document.getElementById("senha");

function loginValidate(){
    if (userLog.value == "user@gmail.com" && senhaLog.value == "123"  ){
    localStorage.setItem("acesso", true);

    window.location.href = "convite.html";
    } else {
        alert('Senha ou usuário incorreto')
    }
}

function goParty() {
    let btnfesta = document.getElementById("btn-festa");
    window.location.href="home1.html";
}


let listaConvidado = document.getElementsByTagName("LI");

for(let i=0; i < listaConvidado.length;i++){
let span=document.createElement("SPAN");

let txt=document.createTextNode("\u00D7");

span.className = "fechar";
span.appendChild(txt);
listaConvidado[i].appendChild(span);
}

let fechar = document.getElementsByClassName("fechar");
let i;

for(let i=0; i < fechar.length;i++){
  fechar[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let lista=document.querySelector('ul');
lista.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
  }
}, false);

function novoConvidado() {
let li=document.createElement("li");

let inputValue=document.getElementById("campoInput").value;

let t = document.createTextNode(inputValue);

 li.appendChild(t);
 if (inputValue === '') {
 alert("Campo vazio!");
  } else {
    document.getElementById("minhaLista").appendChild(li);
  }
  document.getElementById("campoInput").value = "";

let span=document.createElement("SPAN");

let txt=document.createTextNode("\u00D7");

  span.className = "fechar";
  span.appendChild(txt);
  li.appendChild(span);

for (i = 0; i < fechar.length; i++) {
    fechar[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
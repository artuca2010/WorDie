
let Btn1 = document.getElementById('btn1')
let Btn2 = document.getElementById('btn2')
let Btn3 = document.getElementById('btn3')
let Btn4 = document.getElementById('btn4')

let ClickAmount = 0
let ImageClic = document.getElementById('imagem')

let Title = document.getElementById('titulo')
let InputText = document.getElementById('inputTexto')
let message = document.getElementById('mensagem')
let Box = document.getElementById('caixa')
let Ul = document.getElementById('lista')
let Container = document.querySelector('.container');
// Btn 1 --- Title propetie 2 ----///-------
Btn1.addEventListener('click', () => {
    Title.textContent = 'JavaScript é Incrível!';
    ClickAmount ++;
    console.log(ClickAmount)
});
// Btn 2 ---- // Title propetie ----//----
Btn2.addEventListener('click', () => {
    let Name = document.getElementById('inputTexto').value
    if (Name == ""){
        alert("por favor digite um nome!")
        return
    }
    message.textContent = `Olá ${Name}`
    InputText.remove() 
})
// Box Stuff ---//-----
Box.addEventListener('mouseenter', () => {
    Box.style.backgroundColor = 'Red';
});
Box.addEventListener('mouseleave', () => {
    Box.style.backgroundColor = '#3498db';
});

// Add List ---//---
Btn3.addEventListener('click', () => { 
    let lista = document.createElement('li')
    lista.textContent = 'Você criou uma nova Lista! :]'
    lista.id = "arthur"
    Ul.appendChild(lista)
})

Btn4.addEventListener('click', () => {
    Box.style.display = 'none'
})

ImageClic.addEventListener('click', () => {
    ImageClic.src = 'CoolGuy.jpg'
});

const NightMode = document.createElement("button");

NightMode.textContent = "Modo Noturno";
NightMode.style.width = "8rem"; 
NightMode.style.height = "5rem";
NightMode.style.borderRadius = "5px"; 
NightMode.style.backgroundColor = "gray";
NightMode.style.color = "white";
NightMode.style.cursor = "pointer";
NightMode.style.marginTop = "20px"; 

NightMode.addEventListener('click', () => { 
  document.body.style.backgroundColor = '#474747'; 
  Container.style.backgroundColor = '#787878';
  document.body.style.color = 'white' 
});


document.body.appendChild(NightMode);
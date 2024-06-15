const verificar = document.querySelector('.verificar');

verificar.addEventListener('click',function(){
    let numero = document.querySelector('#numero').value;
    let numero1 = document.querySelector('#numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    let numeroTotal = Number(numero + numero1 +numero2);
    const texto = document.querySelector('.texto');

    if(numeroTotal === 911){
        texto.innerHTML = "La contraseña 1 es correcta";
        texto.style.color = 'green'; 
    }else if (numeroTotal === 714){
        texto.innerHTML = "La contraseña 2 es correcta";
        texto.style.color = 'green'; 
    }else{
        texto.innerHTML = "La contraseña es incorrecta";
        texto.style.color = 'red'; 
    }
    
});

/* realizaremos el codigo para calculara he inprimir el resultado de los stickers */
let calcular = document.querySelector('.calcular');
calcular.addEventListener('click',function(){
    const stikers = Number(document.querySelector('.sticker').value|| 0);
    const stikers2 = Number(document.querySelector('.sticker2').value|| 0);
    const stikers3 = Number(document.querySelector('.sticker3').value ||0);
    const suma = stikers + stikers2 + stikers3;
    const resultado = document.querySelector('.texto');

    if(suma == 0){
        resultado.innerHTML = 'Escoje almenos 1 Stickers';

    }else if(suma <=10 ){
            resultado.innerHTML = 'Espero que disfrutes tus ' + suma +' stickrs';
            resultado.style.color = 'green';
    }else{
        resultado.innerHTML = suma + ' son muchos stickrs, solo puedes llevar 10 ';
        resultado.style.color = 'red';
    }
});
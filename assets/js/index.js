/* este sera el codigo de la primera parte del reto en el cual se camobia el borde de la imagen */

let imagenBorde = document.querySelector('.imagen_borde');

imagenBorde.addEventListener('click',function () {
    if(imagenBorde.style.border === "2px solid red"){
       imagenBorde.style.border = "none";
    }else{
        imagenBorde.style.border = "2px solid red";
    }
});
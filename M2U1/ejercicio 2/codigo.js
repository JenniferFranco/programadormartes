let texto = document.getElementById("texto");

let contar = document.getElementById("contar");

texto.addEventListener ("keyup",function(){
    contar.innerHTML = texto.value.length;
})
function cambiarFondo (color){
    document.querySelector("body").style.background= color;
}

document.querySelector(".rojo").addEventListener("click", function(){cambiarFondo("#f00")});

document.querySelector(".verde").addEventListener("click", function(){cambiarFondo("#0f0")});

document.querySelector(".azul").addEventListener("click", function(){cambiarFondo("#00f")});
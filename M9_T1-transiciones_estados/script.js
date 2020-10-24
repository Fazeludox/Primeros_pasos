
const nombre = () => {
    let value_nombre = document.getElementById("nombre");
    let longitud_nombre = value_nombre.value.length;

    if(longitud_nombre!==0){
        return true;
    }else{
        return false
    }


}

const mensaje = () => {
    let value_mensaje = document.getElementById("mensaje");
    let longitud_mensaje = value_mensaje.value.length;
    
    if(longitud_mensaje!==0){
        return true;
    }else{
        return false
    }
}

const comprobar = () => {
    if(nombre() && mensaje()){
        return true;
    }else{
        return false;
    }
}


document.addEventListener("keyup", (ev) => {
    if(comprobar()){
        document.getElementById("button").disabled = false;
    }else{
        document.getElementById("button").disabled = true;
    }
})


document.addEventListener('DOMCompleteLoaded',null);

const showLateral = () => {
    let lateral = document.getElementById("sidebar");
    let element = document.querySelectorAll(".lateral > ul > li");
    let value=0;

    for (let elemento_lista of element){
        value++;
        elemento_lista.classList.toggle("elemento"+value);
        console.log(value);
    }

    lateral.classList.toggle("active");
};

document.addEventListener("click", (ev)=>{
    console.log(ev);
    if (ev.target.matches(".menu_lateral")) showLateral();
    else if (ev.target.matches(".fas")) showLateral();
})
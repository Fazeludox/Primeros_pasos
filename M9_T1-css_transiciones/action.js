
const matchEvent = (ev, sel) => ev.target.matches(sel);
let active = false;
let active_hvr=false;

const showMenu = (ev) => {
    let menu = document.getElementById("menu");
    let elements = document.querySelectorAll('#menu > ul > li');

    console.log(elements);
    
    

    if(!active){
        ev.target.classList.add("focus");
        for (let value of elements){
            value.classList.add("effect");
        }


        menu.classList.add("active");
        active = true;
    }else{
        ev.target.classList.remove("focus");

        for (let value of elements){
            value.classList.remove("effect");
        }

        menu.classList.remove("active");
        active = false;
    }
    
}

const showMenuHVR = (ev) => {
    let label = document.getElementById("label_calendar");
    let menu = document.getElementById("menu_hvr");
    let elements = document.querySelectorAll('#menu_hvr > ul > li');

    console.log(elements);
    
    

    if(!active_hvr){
        ev.target.classList.add("focus");
        for (let value of elements){
            value.classList.add("effect");
    }

        label.classList.add("label_calendar_active");
        menu.classList.add("active");
        active_hvr = true;
    }else{
        ev.target.classList.remove("focus");

        for (let value of elements){
            value.classList.remove("effect");
        }
        label.classList.remove("label_calendar_active");
        menu.classList.remove("active");
        active_hvr = false;
    }
    
}

document.addEventListener("click", (ev) => {
    if (ev.target.matches(".btn_dropmenu")) showMenu(ev);
});

document.addEventListener("mouseover", (ev) =>{
    if(ev.target.matches(".hvr_dropmenu")) showMenuHVR(ev);
})

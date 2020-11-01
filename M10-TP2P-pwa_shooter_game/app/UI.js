/**
 * JS for UI components
 */

/**
 * Global vars
 */
let toggles;
let swipeSection;
let swiper;

let BGM;
let song= false;

let shoot_fx;
let shoot_status = false;

/**
 * @function initToggles
 * 
 * Inicializa los Toggles en la aplicación
 * Toggle son los switchers
 */
//#endregion

let serviceWorker = () => {
    if ('serviceWorker' in navigator){
        navigator.serviceWorker.register("/sw.js").then( (reg)=>{            
            console.log("[Service Worker] Registration succeded.");
        }).catch((e)=>{
            console.log("[Service Worker] Registration failed.")
        })
    }else{
        console.log("Service Workers are not supported");
    }
}


 //Iniciar Toggles y comprobar que toggles activar.
let initToggles = () => {

    toggles.forEach(t => {
    
        t.addEventListener('click', () => {

            if(t.matches('.on')){
                animation_toggle_off(t);

                animation_toggles.finished.then(()=>{
                    checking_bgm(t);
                    checking_shoot(t);
                    t.classList.remove('on');
                })
                
            }else{
                animation_toggle_on(t);
                animation_toggles.finished.then(()=>{
                    checking_bgm(t);
                    checking_shoot(t);
                    t.classList.add('on');
                })
            }

        });
    });
};

//Comprobar si la bgm esta sonando

let checking_bgm = (t) => {
    if(t.matches('.BGM')){
        if(!song){
            BGM.play();
            song = true;
        }else{
            BGM.pause(); 
            song = false;
        }
    }
}

//Comprobar si los efectos estan sonando

let checking_shoot = (t) => {
    if(t.matches('.shoots')){
        if(!shoot_status){
            shoot_fx.play();
            shoot_status = true;
        }else{
            shoot_fx.pause(); 
            shoot_status = false;
        }
    }
}

/**
 * @function initSwiper
 * 
 * Inicializa SwiperJS con las configuraciones necesarias
 * La navegación entre las página settings, menu, leaderboard es con Swiper
 */

 //Definicion del swiper

let initSwiper = () => {
    swiper = new Swiper(swipeSection,{
        direction: 'horizontal',
        spaceBetween: 30,
        loop: false,
        initialSlide: 1, 
        pagination: {
            el: 'swiper_item',
        }
    });
};


/**
 * @function initUI
 * 
 * Inicializa todo lo que tenga que ver con UI
 * La ejecuto en main.js
 */
const initUI = () => {
    // toggles para activar el audio y efectos
    BGM =  document.getElementById("bgm");
    shoot_fx = document.getElementById("shoot");

    toggles = GAME_UI.app.querySelectorAll('.toggle');
    initToggles();

    // swiperJS
    swipeSection = '.swiper_section';
    initSwiper();
};



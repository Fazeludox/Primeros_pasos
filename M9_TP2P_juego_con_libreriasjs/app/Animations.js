/**
 * 
 * animation_FadeIn
 * 
 * Ejemplo de animación. Todas las animaciones tienen siempre 3 pasos: 
 *       a. Seleccionamos los elementos a animar
 *       b. Hemos visto que anime se comporta mejor con CSS declarado en el atributo style del HTML
 *          Por lo tanto, si queremos hacer alguna animación, podemos iniciar los valores con anime.set
 *       c. Animamos, con un timeline mejor, para poder concatenar animaciones...
 *       d. Si queremos meter alguna función después de animar podemos meter el callback complete o usar promesas...
 * 
 * 
 */


//Animaciones activar Toggles

const animation_toggle_on = (toggle_pressed) => {
    let border = toggle_pressed;
    let toggle1;
    let toggle2;
    let border2;

    let id = border.parentNode.parentNode.parentNode.parentNode.parentNode.id;

    console.log(id);

    switch(id){
        case "settings_page":

            if(toggle_pressed.matches(".BGM")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#modal_pause_window .BGM");
                toggle2 = document.querySelector("#modal_pause_window .BGM .mdi");
            }

            if(toggle_pressed.matches(".shoots")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#modal_pause_window .shoots");
                toggle2 = document.querySelector("#modal_pause_window .shoots .mdi");
            }
            
            break;

        case "modal_pause_window":

            
            if(toggle_pressed.matches(".BGM")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#settings_page .BGM");
                toggle2 = document.querySelector("#settings_page .BGM .mdi");
            }

            if(toggle_pressed.matches(".shoots")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#settings_page .shoots");
                toggle2 = document.querySelector("#settings_page .shoots .mdi");
            }

            break;
    }


    anime.set(toggle1, {
        translateX:0,
    })

    anime.set(toggle2, {
        translateX:0,
    })

    animation_toggles = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 350,
        opacity: 1,
    });

    animation_toggles
        .add({
            targets: toggle1,
            translateX: 25,
        })
        .add({
            targets: toggle2,
            translateX: 25,
        })

        .add({
            targets: border,
            opacity:1,
            borderColor: '#323232',
            borderSize: 3,
        },'-=150')

        .add({
            targets: border2,
            opacity:1,
            borderColor: '#323232',
            borderSize: 3,
            complete: function(anim){
                toggle1.classList.replace('mdi-checkbox-blank-circle', 'mdi-checkbox-marked-circle');
                toggle2.classList.replace('mdi-checkbox-blank-circle', 'mdi-checkbox-marked-circle');

                border2.classList.add("on");

            }
        },'-=150')
}  

//Animaciones desactivar Toggles

const animation_toggle_off = (toggle_pressed) => {
    

    let border = toggle_pressed;

    let id = border.parentNode.parentNode.parentNode.parentNode.parentNode.id;

    console.log(id);

    switch(id){
        case "settings_page":

            if(toggle_pressed.matches(".BGM")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#modal_pause_window .BGM");
                toggle2 = document.querySelector("#modal_pause_window .BGM .mdi");
            }

            if(toggle_pressed.matches(".shoots")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#modal_pause_window .shoots");
                toggle2 = document.querySelector("#modal_pause_window .shoots .mdi");
            }
            
            break;

        case "modal_pause_window":

            
            if(toggle_pressed.matches(".BGM")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#settings_page .BGM");
                toggle2 = document.querySelector("#settings_page .BGM .mdi");
            }

            if(toggle_pressed.matches(".shoots")){
                toggle1 = toggle_pressed.querySelector('.mdi');
                border2 = document.querySelector("#settings_page .shoots");
                toggle2 = document.querySelector("#settings_page .shoots .mdi");
            }

            break;
    }


    anime.set(toggle1, {
        translateX:20,
    })

    anime.set(toggle2, {
        translateX:20,
    })

    animation_toggles = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 350,
        opacity: 1,
    });


    animation_toggles
        .add({
            targets: toggle1,
            translateX: 0,
        })

        .add({
            targets: toggle2,
            translateX: 0,
        })

        .add({
            targets: border,
            opacity:1,
            borderColor: 'rgba(50, 50, 50, 0)',
            borderSize: 3,

        },'-=150')

        .add({
            targets: border2,
            opacity:1,
            borderColor: '#323232',
            borderSize: 3,
            complete: function(anim){
                toggle1.classList.replace('mdi-checkbox-marked-circle', 'mdi-checkbox-blank-circle');
                toggle2.classList.replace('mdi-checkbox-marked-circle', 'mdi-checkbox-blank-circle');

                border2.classList.remove("on");

            }
        },'-=300')

}


//Animacion splash

const animation_FadeIn = () => {
    // Selecciona elementos a animar
    const splash = GAME_UI.pages.splash;
    const astronaut = splash.querySelectorAll("svg .Astronaut_logo path")
    

    // Necesitas meter algo de CSS antes de la animación??
    anime.set(splash, {
        visibility: 'visible',
        opacity: 1
    });

    anime.set(astronaut, {
        translateY:'0',
        opacity: 0,
    })


   animation_layout = anime({
            targets: astronaut,
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: 1,
            easing: 'easeInOutQuad',

            duration: 1800,
            delay: function(el, i) { return i * 200 },
            direction: 'alternate',
            loop: 2,
          });


};

//Animaciones Menu
const animation_menu = () => {

    const menu = GAME_UI.pages.menu;

    const Titulo_h1 = menu.querySelector('h1');
    const bg_slider = menu.querySelector(".slider");

    const Titulo_lineado = menu.querySelectorAll(".slider .Game svg path");
    const modelos_entes = menu.querySelectorAll(".slider .images svg");
    

    const footer = menu.querySelector('footer');
    const play = menu.querySelector("footer .Play");
    const btn_foot = menu.querySelectorAll("footer .foot_navigation ul>li");

    anime.set(menu, {
        visibility: 'visible',
        opacity:0,
    })
    anime.set(Titulo_h1, {
        visibility: 'visible',
        translateX:'+50%',
        opacity: 0, 
    })

    anime.set(bg_slider, {
        scale: 0,
        opacity: 0,
        backgroundColor: 'white',
    })

    anime.set(Titulo_lineado,{
        opacity: 0,
        scale: 0,
        fill:'transparent',
        translateY:function() { return anime.random(-20, 20)+'rem'},
        translateX:function() { return anime.random(-20, 20)+'rem'},
    })

    anime.set(modelos_entes, {
        opacity: 0,
        translateY:function() { return anime.random(-20, 20)+'rem'},
    })

    anime.set(footer, {
        opacity: 0,
    })
    anime.set(play, {
        opacity:0,
        translateY:'-50',
    })
    anime.set(btn_foot, {
        opacity: 0,
        translateY:'50',
        scale: 0.5,
    })


    animation_layout = anime.timeline({
        duration: 400,
        easing: 'easeInOutQuad',
    })

    animation_layout
    .add({
        targets: menu,
        opacity: 1,
    })
    .add({
        targets: Titulo_h1,
        translateX: 0,
        opacity: 1,
        },'-=200')
    .add({
        targets: bg_slider,
        backgroundColor: '#727272',
        opacity:1,
        scale: 1,
    },'-=100')
    .add({
        targets:Titulo_lineado,
        opacity:1,
        scale:1,
        translateX: 0,
        translateY: 0,
        delay: anime.stagger(100,{
            easing: "easeInOutExpo",
       })
    })
    .add({
        targets:Titulo_lineado,
        fill: '#c58ab1',
        delay: anime.stagger(120,{
            easing: "easeInOutSine",
       })
    }, '-=500')
    .add({
        targets: modelos_entes,
        opacity: 1,
        translateY: 0,
        delay: anime.stagger(150,{
             easing: "easeInOutSine",
        })
    },'-=100')
    .add({
        targets:footer,
        opacity:1,
    },'-=200')
    .add({
        targets: play,
        translateY:0,
        opacity:1,
    })
    .add({
        targets: btn_foot,
        translateY:0,
        opacity:1,
        scale:1,
        delay: anime.stagger(200, {
            easing: 'easeInOutSine',
        })
    })


};  


//Animaciones LeaderBoard

const animation_leader = () => {
    const page = GAME_UI.pages.leaderboard;

    const title_score = page.querySelector('.hscore h2');
    const score = page.querySelector('.hscore .main');
    const title_lboard = page.querySelector('.lboard h2');
    const score_item = page.querySelectorAll('.lboard_table > .lboard_item');


    const footer = page.querySelector('.footer');
    const footer_mdi = page.querySelector('.footer .bg');



   

    anime.set([title_score], {
        opacity: 0,
        translateX:'20%',
    })

    anime.set([score], {
        opacity: 0,
        scale: 0,
    })

    anime.set([title_lboard], {
        opacity: 0,
        translateX:'-20%',
        scale: '.70'
    })

    anime.set([score_item], {
        opacity: 0,
        translateX:'35%',
    })

    anime.set(footer, {
        translateY:'50',
        opacity: 0,
    })

    anime.set(footer_mdi, {
        scale: 0,
        opacity: 0,
    })

    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutQuad',
    })

    animation_layout
    .add({
        targets: title_score,
        translateX: 0,
        opacity:1,
    },'+=200')
    .add({
        targets:score,
        opacity:1,
        scale:1,
    },'+=100')
    .add({
        targets: title_lboard,
        opacity: 1,
        translateX:0,
        scale: 1,
    },'+=200')

    .add({
        targets: score_item,
        translateX:0,
        opacity:1,
        delay: anime.stagger(350, {
            easing:'easeInOutSine',
        },'-=100')
    })
    .add({
        targets: footer,
        translateY:0,
        opacity: 1,
    })
    .add({
        targets: footer_mdi,
        scale: [0.7,0.6,1],
        opacity:1,
        easing: 'easeInOutSine'
    },'-=200')







};

//Animaciones Settings

const animation_settings = () => {
    const page = GAME_UI.pages.settings;

    const title_settings = page.querySelector('h2');
    const settings_element = page.querySelectorAll('.settings .setting');
    const bar_setting = page.querySelectorAll('.setting .setting_toggle');

    const footer = page.querySelector('.footer');
    const footer_mdi = page.querySelector('.footer .bg');

    anime.set(footer, {
        translateY:'50',
        opacity: 0,
    })

    anime.set(footer_mdi, {
        scale: 0,
        opacity: 0,
    })

    anime.set(page, {
        opacity: 0,
        translateY:'30%',
    })

    anime.set(title_settings, {
        opacity: 0,
        translateX:'-100%',
    })

    anime.set([settings_element], {
        opacity: 0,
        translateX: '50%',
    })

    anime.set([bar_setting],{
        opacity:0,
        translateY:'-20%',
    })

    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutQuad',
    })

    animation_layout.add({
        targets: page,
        opacity: 1,
        translateY: 0,
    })
    .add({
        targets:title_settings,
        opacity: 1,
        translateX:0,
    },'+=200')
    .add({
        targets: settings_element,
        translateX:0,
        opacity: 1,
        delay: anime.stagger(200),
    },'-=100')
    .add({
        targets: bar_setting,
        opacity:1,
        translateY:0,
        delay: anime.stagger(300, {
            easing: 'easeInOutSine',
        })
    })
    .add({
        targets: footer,
        translateY:0,
        opacity: 1,
    })
    .add({
        targets: footer_mdi,
        scale: [0.7,0.6,1],
        opacity:1,
        easing: 'easeInOutSine'
    },'-=200')


};

//Animaciones Game

const animation_main = () => {
    const page = GAME_UI.pages.main;

    const ui_elements = page.querySelectorAll('.ui > div');

    const ui_life_icon = page.querySelector('.ui .lifes .icon');
    const ui_score_icon = page.querySelector('.ui .score .icon');

    anime.set(page, {
        opacity: 0,
    })

    anime.set(ui_elements, {
        opacity: 0,
        translateX:'-100',
    })

    anime.set(ui_life_icon, {
        opacity: 0,
        translateX:'30',
        scale: 0,
    })

    anime.set(ui_score_icon, {
        opacity: 0,
        translateX:'-30',
        scale: 0,
    })

    animation_layout = anime.timeline({
        duration: 800,
        easing: 'easeInOutSine',
    })

    animation_layout
    .add({
        targets: page,
        opacity:1,
    })
    .add({
        targets:ui_elements,
        translateX:0,
        opacity:1,
        delay: anime.stagger(100,{
            easing: 'easeInOutExpo',
        })
    })
    .add({
        targets: ui_life_icon,
        opacity: 1,
        translateX:0,
        scale:1,
    })

    .add({
        targets: ui_score_icon,
        opacity: 1,
        translateX:0,
        scale:1,
    })

}


/**
 * El resto de animaciones las construyes tú. 
 * Recuerda que puedes guardar las animaciones del layout
 * en la variable global animation
 */

 //Navegacion

const animation_SplashToMenu = (getTo) => {
    // Selecciona elementos a animar
    const from = GAME_UI.pages.splash;
    const page = GAME_UI.pages.swiperContainer;
    const to = GAME_UI.pages.menu;

    
    // Establezco el menu principal como inicio, en vez de settings.
    // Necesitas meter algo de CSS antes de la animación??

    anime.set(from, {
        visibility: 'visible', 
        translateY: '0', 
        opacity: 1,
    });

    anime.set(to, {
        visibility: 'visible', 
        translateY: '100%', 
        opacity: 0,
    });

    anime.set(page, {
        opacity: 1,
        visibility: 'visible',
    })

    // Anima!
    animation_layout = anime.timeline({
        duration: 300,
        easing: 'easeInOutSine'
    });
    animation_layout
        .add({
            targets: [from], 
            translateY: '-50%', 
            opacity: 0,
        })
        .add({
            targets:[page],
            opacity: 1,
        })
        .add({
            targets: [to], 
            translateY: 0, 
            opacity: 0,
        })
};

const animation_MenuToMain = () => {

    const from =  GAME_UI.pages.swiperContainer;
    const to = GAME_UI.pages.main;
    
    anime.set(to, {
        visibility: 'visible', 
        translateY: '100%', 
        opacity: 0
    });

    // Anima!
    animation_layout = anime.timeline({
        duration: 750,
        easing: 'easeInOutSine'
    });
    animation_layout
        .add({
            targets: [from], 
            translateY: '-100%', 
            opacity: 0
        })
        .add({
            targets: [to], 
            translateY: 0, 
            opacity: 0,

            complete: function(anim){
                if("#"+to.id === '#main_page' ){
                    showSpinner();
                    animation_main();
                    animation_layout.finished.then(()=>{
                        hideSpinner();
                        startGame();
                    })
                }
            }
        }, '-=750')


};

const animation_MaintoMenu = () => {
    const from = GAME_UI.pages.main;
    const to = GAME_UI.pages.swiperContainer;

    anime.set([to], {
        visibility:'visible',
        opacity: 0,
        translateY: '100',
    })

    animation_layout = anime.timeline({
        duration: 600,
        easing: 'easeInOutQuad',
    })

    animation_layout
            .add({
                targets: from,
                opacity:0,
                translateY: '100%',
            })
            .add({
                targets: to,
                translateY:0,
                opacity: 1,
            })
}
/**
 * 
 * Ejemplo de un popup, como vemos, es lo mismo....
 */

 // Animacion Pausar el juego

const animation_PopupPause = () => {
    const popup = GAME_UI.modalWindows.pause;
    const bg = GAME_UI.app.querySelector('#modal_pause_window .overlay')
    const blur = GAME_UI.pages.main;

    anime.set(popup, {
        translateY: '20%', 
        opacity: 0, 
        visibility: 'visible'
    });

    anime.set(bg, {
        opacity: 0, 
        visibility: 'visible'
    });

    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeOutQuad',

        update: function(anim){
            blur.style.filter = 'blur(' + 0.1 * anim.progress / 2  + 'px)'
        }
    });

    animation_layout
    .add({
        targets:bg,
        opacity: 1,
    })
    .add({
        targets: popup,
        translateY: '0%',
        opacity: 1
    }, '-=200');
};

//Animacion cancelar pausa

const animation_PopupResume = () => {
    const popup = GAME_UI.modalWindows.pause;
    const blur = GAME_UI.pages.main;
    const bg = GAME_UI.app.querySelector('#modal_pause_window .overlay')

    anime.set(popup, {
        translateY: '0', 
        opacity: 1, 
    });

    anime.set(bg, {
        translateY: '0', 
        opacity: 1, 
    });

    animation_layout = anime.timeline({
        duration: 600,
        easing: 'easeOutQuad',

        update: function(anim){
            blur.style.filter = 'blur(' + 0.1 / anim.progress + 'px)'
        }
    });

    animation_layout.
    add({
        targets: popup,
        translateY: '50%',
        opacity: 0
    })
    .add({
        targets: bg,
        opacity: 0,
        complete: function(anim){
            anime.set(popup, {
                visibility: 'hidden'
            })
            anime.set(bg, {
                visibility: 'hidden'
            })
        }

    }, '-=200')

};

//Modal de muerte

const animation_dead = () => {
    const popup_dead = GAME_UI.modalWindows.dead;

    anime.set([popup_dead], {
        opacity: 0,
        visibility: 'visible',
    })

    animation_layout = anime.timeline({
        duration: 600,
        easing: 'easeInOutSine',
    })

    animation_layout
        .add({
            targets: popup_dead,
            opacity: 1,
        })
}

//Animacion modal muerte

animation_dead_reset = () => {
    const popup_dead = GAME_UI.modalWindows.dead;

    anime.set([popup_dead], {
        opacity: 1,
        visibility: 'visible',
    })

    animation_layout = anime.timeline({
        duration: 600,
        easing: 'easeInOutSine',
    })

    animation_layout
        .add({
            targets: popup_dead,
            opacity: 0,

            complete: function(anim){
                anime.set(popup_dead, {
                    visibility: 'hidden',
                })
            }
        })
}

//Modal de salir del juego
const animation_exit = () => {
    const popup_exit = GAME_UI.modalWindows.confirm;

    anime.set([popup_exit], {
        opacity:0,
        visibility: 'visible',
    })

    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutQuad'
    });

    animation_layout
    
        .add({
            targets: popup_exit,
            opacity:1,
        })

};


//Modal de cancelar salida del juego
const animation_cancel_exit = () => {
    const popup_exit = GAME_UI.modalWindows.confirm;

    anime.set([popup_exit], {
        opacity:1,
        visibility: 'visible',
    })

    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutQuad'
    });

    animation_layout
        .add({
            targets: popup_exit,
            opacity:0,

            complete: function(anim){
                anime.set(popup_exit, {
                    visibility: 'hidden'
                })
            }
        })

};

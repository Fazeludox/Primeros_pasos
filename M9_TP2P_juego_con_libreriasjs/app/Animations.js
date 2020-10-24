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

//Fade-in

const animation_FadeIn = () => {
    // Selecciona elementos a animar
    const splash = GAME_UI.pages.splash;
    const title = splash.querySelector('h1');

    // Necesitas meter algo de CSS antes de la animación??
    anime.set(splash, {
        visibility: 'visible',
        opacity: 0
    });
    anime.set(title, {
        opacity: 0,
        translateY: 50
    });

    // Anima!
    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutSine'
    });

    animation_layout
        .add({
            targets: [splash],
            opacity: 1
        })
        .add({
            targets: [title],
            opacity: 1, 
            translateY: 0,
        }, '-=200');
};

//Slider

const animation_slider = () => {
    const menu = GAME_UI.pages.menu;
    const title = menu.querySelector('h1');

    anime.set(menu, {
        visibility: 'visible',
        opacity:0,
    })
    anime.set(title, {
        visibility: 'visible',
        translateX:'+50%',
        opacity: 0, 
    })


    anime_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutQuad'
    })

    anime_layout
    .add({
        targets: menu,
        opacity: 1,
    })
    .add({
        targets: title,
        translateX: 0,
        opacity: 1,
        })
};

//Animaciones LeaderBoard

const animation_leader = () => {
    const page = GAME_UI.pages.leaderboard;

    const title_score = page.querySelector('.hscore h2');
    const score = page.querySelector('.hscore .main');
    const title_lboard = page.querySelector('.lboard h2');
    const score_item = page.querySelectorAll('.lboard_table > .lboard_item');

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

    animation_layout = anime.timeline({
        duration: 900,
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







};

//Animaciones Settings

const animation_settings = () => {
    const page = GAME_UI.pages.settings;

    const title_settings = page.querySelector('h2');
    const settings_element = page.querySelectorAll('.settings .setting');
    const bar_setting = page.querySelectorAll('.setting .setting_toggle');

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
        duration: 600,
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
    const to = GAME_UI.pages.swiperContainer;
    const page = GAME_UI.pages.menu;
    // Establezco el menu principal como inicio, en vez de settings.
    // Necesitas meter algo de CSS antes de la animación??
    anime.set(to, {
        visibility: 'visible', 
        translateY: '100%', 
        opacity: 0,
    });

    anime.set(page, {
        opacity: 0,
    })

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
            opacity: 1,
            complete: function(anime){
                swipeTo('#menu_page');
            }
        }, '-=750')
};

const animation_MenuToMain = (inicio, fin) => {

    const from =  GAME_UI.pages[inicio]; //GAME_UI.pages.swiperContainer;
    const to = GAME_UI.pages[fin];
    
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


//Estudio de posiciones y animaciones
const webposition = (getTo) => {

    switch(GAME_UI.state.navigationStage){
        case '#splash_page':
            ini='splash';
            break;
        case '#main_page':
            ini='main';
            break;
        case '#swiper_page':
        case '#menu_page':
        case '#settings_page':
        case '#leaderboard_page':
        case '#modal_confirm':
            ini='swiperContainer';
        break;
            default:
                navigationErrHandler(`Hay un error, getTo:`+GAME_UI.state.navigationStage+` no esta definida correctamente`);
    }

    switch(getTo){
        case '#splash_page':
            wpos='splash';
            animation_MenuToMain(ini, wpos);
            break;
        case '#swiper_page':
            wpos='swiperContainer';
            animation_MenuToMain(ini, wpos);
            break;
        case '#main_page':
            wpos='main';
            animation_MenuToMain(ini, wpos);
            
            break;
        case '#menu_page':
            wpos='menu';
            animation_slider();
            anime_layout.finished.then( ()=> {
                animation_MenuToMain(ini, wpos);
            })
            break;
        default:
            navigationErrHandler(`Hay un error, getTo:`+getTo+` no esta definida correctamente`);
    };

};

/**
 * 
 * Ejemplo de un popup, como vemos, es lo mismo....
 */

 // Animacion Pause

const animation_PopupPause = () => {
    const popup = GAME_UI.modalWindows.pause;

    anime.set(popup, {
        translateY: '20%', 
        opacity: 0, 
        visibility: 'visible'
    });

    animation_layout = anime.timeline({
        duration: 300,
        easing: 'easeOutQuad'
    });

    animation_layout.add({
        targets: popup,
        translateY: '0%',
        opacity: 1
    });
};

//Animacion Resume

const animation_PopupResume = () => {
    const popup = GAME_UI.modalWindows.pause;

    anime.set(popup, {
        translateY: '0', 
        opacity: 0, 
    });

    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeOutQuad'
    });

    animation_layout.add({
        targets: popup,
        translateY: '50%',
        opacity: 1
    })
    .add({
        targets: popup,
        opacity: 0,
    }, '-=400')

};

//Modal a menu principal

const animation_outGame = () => {
    const from = GAME_UI.pages.main;
    const to = GAME_UI.pages.swiperContainer;
    const page = GAME_UI.pages.menu;

    anime.set([to], {
        translateY: '100%',
        visibility: 'visible'
    });

    anime.set([page],{
        opacity:0,
    });

    animation_layout = anime.timeline({
        duration: 300,
        easing: 'easeOutQuad'
    });

    animation_layout
    
        .add({
            targets: from,
            translateY:'20%',
            opacity:0,
            duration: 200
        })

        .add({
            targets: to,
            translateY: 0,
            opacity: 1,
            duration: 300,

            complete: (()=>{
                animation_slider();
            })
        })

        .add({
            targets: from,
            visibility: 'hidden',
        },'-=100');

};


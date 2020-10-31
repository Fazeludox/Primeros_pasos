/**
 * Programmatic Navigation and Page Transitions
 * with SwiperJS and AnimeJS
 */


/**
 * Variables globales de navegación
 * En estas variables guardamos elementos DOM para trabajar con ellos
 */
let links;
let sections;
let modals;


/**
 * Variables globales de animación
 * Las animaciones las podemos guardar aquí: 
 * animaciones del layout, animaciones de componentes concretos, etc...
 * 
 * Si quieres crear una linea de animación nueva, puedes crear tus variables aquí
 */
let animation_layout;
let animation_toggles;



/**
 * @function navigationErrHandler
 * @param {Error} err  
 * Trata errores que se den en la navegación
 */
const navigationErrHandler = (err = "") => {
    if (err) {
        console.error("Ops! Something went wrong");
        console.error(err);
    }
};


/**
 * @function initNavigation
 * 
 * 
 * Inicializa la navegación SPA (Single Page Application)
 * Para ello: 
 * 
 * 1. Capturo el evento sobre los tags <a> y prevengo que naveguen
 * 2. Todas las <a> tienen un atributo en el HTML llamado navigation-type
 * 3. En función de este navigation-type navegamos de 3 maneras diferentes: 
 * 
 *    - a. swipe
 *         Navegamos con Swiper entre páginas y menú principal. 
 *         El controlador de esta navegación en swiperJS
 * 
 *    - b. animation
 *         Vamos al juego o volvemos del juego o entre splash page y 
 *         menu. Esta navegación la hacemos con animeJS. Haciendo que haya pantallas 
 *         que entren y salgan animando propiedades CSS.
 *         El tipo de animación lo metemos en otro atributo llamado "animation-type". 
 *         Mirar primer ejemplo
 * 
 *    - c. modal
 *         Abrimos popups y los cerramos. Con animeJS.
 *         El tipo de animación lo metemos en otro atributo llamado "animation-type". 
 *         Mirar primer ejemplo
 * 
 */
const initNavigationEvents = () => {
    links.forEach(link => {
        link.addEventListener('click', ev => {
            ev.preventDefault();

            const navigationType = link.getAttribute('navigation-type');
            const animationType = link.getAttribute('animation-type');
            const getTo = '#' + link.href.split('#').slice(-1);
            
            switch (navigationType) {
                case 'swipe':
                    swipeTo(getTo);
                    break;
                case 'animation':
                    navigationTo(getTo, animationType);
                    break;
                case 'modal':
                    popUpToggle(getTo, animationType);
                    break;
                default:
                    navigationErrHandler();
            }
        });
    });
};


/**
 * @function swipeTo
 * @param {String} getTo 
 * 
 * Función que controla la navegación con swiper.
 * Mirar documentación de swiper en eventos. 
 * Mirar documentación del bloque correspondiente para hacer una navegación con swiper
 */
const swipeTo = (getTo = '#menu_page') => {

   /**
     * Navegar con swipes
     */
     

    item = document.querySelectorAll('.swiper_item');
    let i=0;

    //Lectura de posiciones del swiper
    for( let value of item){
        if(getTo === "#"+value.id){
            swiper.slideTo(i);   
        }else{
            i++;
        }
    } 

    //Seleccionador de animaciones
    switch(getTo){
        case '#menu_page':
            animation_menu();
            break;
        case '#settings_page':
            animation_settings();
            break;
        case '#leaderboard_page':
            animation_leader();
            break;

            default: 
            console.log(getTo + " No esta definido")
     }

    if (!swiper) {
        navigationErrHandler(`No has programado la funcionalidad de Swiper todavía!`);
    }
    // clean up funcs
    GAME_UI.state.navigationStage = getTo;
};


/**
 * @function navigationTo
 * @param {String} getTo
 * @param {String} animationType
 * 
 * Función que controla la navegación general.
 * Esta función actualiza el state de la aplicación
 * Y lanza las animaciones que queramos en función del animationType.
 * 
 */
const navigationTo = (getTo, animationType) => {

    switch (animationType) {

        /**
         * Entrada de la app
         */
        case 'fade_in':
            animation_FadeIn(getTo);
            animation_layout.finished.then(()=>{
                    navigationTo('#swiper_page', 'splash_to_menu');
            })
            break;

        /**
         * Desde la pantalla splash al menu
         */
        case 'splash_to_menu':
            animation_SplashToMenu(getTo);
            animation_layout.finished.then(()=>{
                animation_menu();
            })
            break;

        //Menu al juego

        case 'menu_to_game':
            animation_MenuToMain();
            break;
        
        //Juego al menu

        case 'game_out':
            animation_cancel_exit();
            animation_layout.finished.then(()=>{
                animation_PopupResume();
                animation_layout.finished.then(()=>{
                    animation_MaintoMenu();
                    animation_menu();
                    game.resetGame(getTo);
                        })
            })
            break;
        

        //Muerte en el juego
        case 'dead':
            animation_dead();
            break;
        
        
        //Seleccionar salir tras la muerte
        case 'dead_exit':
            animation_dead_reset();
            animation_layout.finished.then(()=>{
                animation_MaintoMenu();
                animation_menu();
                game.resetGame(getTo);
                    })
        break;

        /**
         * ErrHandler
         */
        default:
            navigationErrHandler(`No has programado el animation-type="${animationType}" todavía!`);
    }


    // clean up funcs
    GAME_UI.state.navigationStage = getTo;
};



/**
 * @function popUpToggle 
 * @param {String} getTo
 * @param {String} animationType
 * 
 * Función que controla la apertura y cierre de ventanas popup (salir del juego y confirmar).
 * Esta función actualiza el state de la aplicación
 * Y lanza las animaciones que queramos en función del animationType
 * 
 */
const popUpToggle = (getTo, animationType) => {

    switch (animationType) {
        /**
         * Lanzar popup de pausa en el juego
         */
        case 'pause_modal':
            animation_PopupPause(getTo);
            animation_layout.finished.then(() => {
                    game.pauseOrResume();
            });
            break;
        
        //Volver al juego
        case 'resume_modal':
            animation_PopupResume(getTo);
            animation_layout.finished.then(()=>{
                    game.pauseOrResume();
            })
            break;
        
        //Salir del juego
        case 'confirm_modal_in':
            animation_exit();
        break;
        
        //Reiniciar juego
        case 'reset':
            animation_dead_reset();
            animation_layout.finished.then(()=>{
                showSpinner();
                animation_main()
            animation_layout.finished.then(()=> {
                hideSpinner();
                document.getElementById(GAME_UI.modalWindows.dead.id).style.setProperty('visibility', 'hidden');
                game.resetGame(getTo);
                startGame();
              })
            })
            break;
        

        //Cerrar modal de salida
        case 'confirm_modal_out':
            animation_cancel_exit();
            animation_layout.finished.then(()=>{
                GAME_UI.modalWindows.confirm.style.setProperty('visibility', 'hidden');
            })
            break;
        /**
         * ErrHandler
         */
        default:
            navigationErrHandler(`No has programado el animation-type="${animationType}" todavía!`);
    }

    GAME_UI.state.navigationStage = getTo;
};


/**
 * @function show/hideSpinner
 * 
 * Función para sacar un spinner (ruedita dando vueltas) para 
 * procesos asíncronos de fetching
 * 
 */
const showSpinner = () => {
    GAME_UI.state.spinning = true;
    GAME_UI.modalWindows.spinner.classList.add('active');
};
const hideSpinner = () => {
    GAME_UI.state.spinning = false;
    GAME_UI.modalWindows.spinner.classList.remove('active');
};



/**
 * @function initNavigation
 * La ejecuto en main.js
 * 
*/
const initNavigation = () => {
    links = GAME_UI.app.querySelectorAll('a[href^="#"]');
    sections = GAME_UI.app.querySelectorAll('section');
    modals = GAME_UI.app.querySelector('modal_window');

    initNavigationEvents();
};
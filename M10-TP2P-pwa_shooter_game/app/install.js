'use strict'

let defferedInstallPrompt = null;

const installPWA = document.getElementById('installPWA');
installPWA.addEventListener('click', installApp);
installPWA.style.setProperty('visibility', 'hidden');
<<<<<<< HEAD
console.log("1");
=======
>>>>>>> fa78b09b538102e52f7c66047ba5a069d62eef0f

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(ev){
    defferedInstallPrompt = ev;
    installPWA.style.setProperty('visibility', 'visible');
<<<<<<< HEAD
    console.log("1");
=======
>>>>>>> fa78b09b538102e52f7c66047ba5a069d62eef0f
}

function installApp(ev){
    defferedInstallPrompt.prompt();
<<<<<<< HEAD
    console.log("13");
=======

>>>>>>> fa78b09b538102e52f7c66047ba5a069d62eef0f
    installPWA.style.setProperty('visibility', 'hidden');

    defferedInstallPrompt.userChoice.then((choice)=>{
        if(choice.outcoume === 'accepted'){
            console.log("User accept the A2HS prompt", choice);
        }else{
            console.log("User dimissed the A2HS prompt", choice);
        }
        defferedInstallPrompt = null;
    });
}

window.addEventListener('appinstalled', congrats);

function congrats(ev){
    console.log('Shooter Them was installed');
}

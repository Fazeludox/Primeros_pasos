'use strict'

let defferedInstallPrompt = null;

const installPWA = document.getElementById('installPWA');
installPWA.addEventListener('click', installApp);
installPWA.style.setProperty('visibility', 'hidden');
console.log("1");

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(ev){
    defferedInstallPrompt = ev;
    installPWA.style.setProperty('visibility', 'visible');
    console.log("1");
}

function installApp(ev){
    defferedInstallPrompt.prompt();
    console.log("13");
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
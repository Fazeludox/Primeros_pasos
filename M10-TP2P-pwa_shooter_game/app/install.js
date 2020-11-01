'use strict'

let deferredInstallPrompt = null;

const installPWA = document.getElementById('installPWA');
installPWA.style.setProperty('visibility', "hidden");

installPWA.addEventListener('click', installApp);
console.log("1");

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(ev){
    ev.preventDefault();
    console.log(ev);
    deferredInstallPrompt = ev;
    installPWA.style.setProperty('visibility', 'visible');
    console.log(deferredInstallPrompt);
}

function installApp(ev) {
    // CODELAB: Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    installButton.style.setProperty('display', "none");
    // CODELAB: Log user response to prompt.
    deferredInstallPrompt.userChoice.then((choice) => {
          if (choice.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt', choice);
          } else {
            console.log('User dismissed the A2HS prompt', choice);
          }
          deferredInstallPrompt = null;
        });
  }

window.addEventListener('appinstalled', congrats);

function congrats(ev){
    console.log('Shooter Them was installed');
}

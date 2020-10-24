let code = document.querySelector("svg.code_logo");
let c_bg = code.querySelector(".bg_code");
let c_tbg = code.querySelector(".top_bg_code");
let c_text = code.querySelector(".code");


let github = document.querySelector("svg.github_logo");
let g_bg = github.querySelector(".bg_github");
let g_logo = github.querySelector(".github");

let discord = document.querySelector('svg.discord_logo');
let d_bg = discord.querySelector('.bg_discord');
let d_logo = discord.querySelector('.discord');


let estado=false;




const showCode = () => {
    return new Promise(function(resolve){
        anime.remove([c_bg, c_tbg, c_text]);

        let anime_code = anime.timeline();
   
        anime.set([code], {
           display: 'unset',
          })

        anime.set([c_tbg], {
        translateY:"-100%",
        fillOpacity:0,
        })
   
          //anime.set([""])
   
       anime_code
           .add({
               targets: c_bg, 
               strokeDashoffset: '0%',
               fillOpacity: '1',
               duration: 700,
               easing: 'easeInOutQuad',
           })
   
           .add({
               targets: c_tbg,
               opacity: 1,
               fillOpacity:1,
               scale:1,
               translateY: '0',
               duration:700,
               easing: 'easeInOutQuad',
           }, '-=400')
           .add({
               targets: c_text,
               opacity: 1,
               scale: 0.5,
               duration: 400,
               easing: 'easeInOutQuad',
           }, '+=200')
   
           .add({
               targets: code,
               opacity: 0,
               rotate: '180deg',
               scale: 0,
               duration: 1000,

               easing: 'easeInOutQuad',
            complete: function(anim){
                anime.set([code], {
                    display: 'none',
                    
                   })
                resolve(anime_code);
            }
           },'+=800'); 
    })
}


const showGithub = () => {

    return new Promise((resolve) => {
        anime.remove([g_bg, g_logo]);

     let  anime_github = anime.timeline();

     anime.set([github], {
        display: 'unset',
       })
       
    anime.set([g_logo], {
        translateY: '100%',
    })
       anime_github
        .add({
            targets: g_bg, 
            strokeDashoffset:'0%',
            fillOpacity:'1',
            opacity: '1',
            duration: 800,
            easing: 'easeInOutQuad',
        })

        .add({
            targets: g_logo,
            opacity: 1,
            fillOpacity:1,
            translateY: '0',
            duration:900,
            easing: 'easeInOutQuad',
        }, '-=200')

        .add ({
            targets: github,
            opacity: 0,
            scale:[0.8,0.3,1],
            scale: 0,
            display:'none',
            duration: 1000,

            complete: function(anim){
                anime.set([github], {
                    display: 'none',
                })
                resolve (anime_github);
            }
        },'+=800');

    })

    
}

const showDiscord = () => {
    return new Promise((resolve)=>{
        anime.remove([d_bg, d_logo]);

   let anime_discord = anime.timeline();
   
   anime.set([discord], {
    display: 'unset',
   });

    anime_discord
        .add({
            targets:d_bg,
            opacity:1,
            duration: 800,
            easing: 'easeInOutQuad',
        })
        .add({
            targets:d_logo,
            opacity:1,
            duration:1000,
            easing: 'easeInOutQuad',
        },'-=200')
    })
    
}



const hideDiscord = () => {

    return new Promise((resolve)=>{
        anime.remove([d_bg, d_logo]);

   let anime_discord = anime.timeline();
   
   anime.set([discord], {
    display: 'unset',
   });

    anime_discord        
    .add({
        targets:d_logo,
        opacity:0,
        duration:1000,
        easing: 'easeInOutQuad',
    })
    .add({
            targets:d_bg,
            opacity:0,
            duration: 800,
            easing: 'easeInOutQuad',

            complete: function (anim) {
                anime.set([discord], {
                    display:'none',
                })
                resolve(anime_discord);
            }
    },'-=200')

    })
    
}

const hideGithub = () => {
    return new Promise((resolve) => {
        anime.remove([g_bg, g_logo]);

     let  anime_github = anime.timeline();

     anime.set([github], {
        display: 'unset',
        opacity: '1',
        scale:1,
       })
       
    anime.set([g_logo], {
        translateY: '0',
        opacity: 1,
        fillOpacity:1,
    })
       anime_github
        .add({
            targets: g_logo,
            opacity: 0,
            fillOpacity:0,
            translateY: '100%',
            duration:900,
            easing: 'easeInOutQuad',
        }, '-=200')

        .add ({

            targets: g_bg, 
            strokeDashoffset:'0%',
            fillOpacity:'0',
            opacity: '0',
            duration: 800,
            easing: 'easeInOutQuad',
        
            complete: function(anim){
                anime.set([github], {
                    display: 'none',
                })
                resolve (anime_github);
            }
        },'+=800');

    })
}

const hideCode = () => {
    return new Promise((resolve) => {
        anime.remove([g_bg, g_logo]);

        anime.set([code], {
            scale:1,
            opacity:1,
            display:'unset',
            rotate:'180deg'
                })
        anime.set([c_tbg], {
             translateY:"0%",
            fillOpacity:1,
            })
       
            let anime_code = anime.timeline();
       
           anime_code
            .add({
                targets:code,
                rotate:'0deg',
                duration: 400,
                easing: 'easeInOutQuad',
            })
       
            .add({
                targets: c_text,
                opacity:0 ,
                scale: 0,
                duration: 500,
                easing: 'easeInOutQuad',
               },'-=100')
       
               .add({

                targets: c_tbg,
               strokeDashoffset: '-400%',
                translateY:"-100%",
                duration:800,
                fillOpacity:0,
                easing: 'easeInOutQuad',
    
                complete: function(anim){
                    anime.set([code], {

                       })
                    resolve(anime_code);
                }
               },'+=800'); 
        })

}


document.addEventListener("click", (ev)=>{
    document.getElementById('contenedor').classList.toggle('active');
    if(!estado){
        estado=true;
        showCode().then(showGithub).then(showDiscord);
    }else{
        estado=false;
        hideDiscord().then(hideGithub).then(hideCode);
    }
    
})




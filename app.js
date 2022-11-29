const btn = document.querySelector(".btn-conteiner");
const play = btn.children[0]
const pause = btn.children[1]
const video = document.querySelector(".video-conteiner")
const preloader = document.querySelector(".preloader-conteiner")

btn.addEventListener("click",function(){
    if(!play.classList.contains("hide-play")){
        play.classList.add("hide-play");
        pause.classList.add("show-pause");
        video.pause();
    }else{
        play.classList.remove("hide-play");
        pause.classList.remove("show-pause");
        video.play();
    }
})

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
})
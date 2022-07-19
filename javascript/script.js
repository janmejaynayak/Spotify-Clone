// initialize the variables

let songIndex = 0;
let audioElement = new Audio('./song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:'corporate-music-for-presentation', filePath:"./song/1.mp3",coverPath:"./coverimage/cover1.jpg"},

    {songName:'leonell-cassio-chapter-two-ft-carrie',filePath:"./song/2.mp3",coverPath:"./coverimage/cover2.jpg"},

    {songName:'Luke-Bergs-Bliss',filePath:"./song/3.mp3",coverPath:"./coverimage/cover3.jpg"},

    {songName:'stomping-rock-four-shots',filePath:"./song/4.mp3",coverPath:"./coverimage/cover4.jpg"},

    {songName:'Weekdays-AShamaluevMusic',filePath:"./song/5.mp3",coverPath:"./coverimage/cover5.jpg"},

    {songName:'Serenity-AShamaluevMusic',filePath:"./song/6.mp3",coverPath:"./coverimage/cover6.jpg"},

    {songName:'Night-AShamaluevMusic',filePath:"./song/7.mp3",coverPath:"./coverimage/cover7.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
            //    audioElement Play ()


            
            // handle play pause 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{audioElement.pause();
          masterPlay.classList.remove('fa-circle-pause');
          masterPlay.classList.add('fa-circle-play');
          gif.style.opacity = 0;
    
    }
})           

            //    listen to events
 

audioElement.addEventListener('timeupdate' ,()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `./song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex = 0;
    }else{
        songIndex += 1;
    }

    audioElement.src = `./song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')


})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }

    audioElement.src = `./song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')


})
console.log("Welcome to Moodify");


let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Let Me Love You",filePath:"songs/1.mp3" , coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    {songName: "Lut Put Gaya",filePath: "songs/2.mp3", coverPath: "https://pagalnew.com/coverimages/lutt-putt-gaya-dunki-500-500.jpg"},
    {songName: "O-mahi",filePath: "songs/3.mp3", coverPath: "https://www.pagalworld.com.sb/siteuploads/thumb/sft138/68671_4.jpg"},
    {songName: "Dekha tenu",filePath: "songs/4.mp3", coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    {songName: "chuye to badan ke",filePath: "songs/5.mp3", coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    {songName: "let me",filePath: "songs/1.mp3", coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    {songName: "suno na sang",filePath: "songs/2.mp3", coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    {songName: "tere bin",filePath: "songs/3.mp3", coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    {songName: "chahun main ya na",filePath: "songs/4.mp3", coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    {songName: "dil to pagal hai",filePath: "songs/4.mp3", coverPath: "https://wallpapercave.com/wp/wp7486622.jpg"},
    
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
});
//Listen to Events
audioElement.addEventListener('timeupdate', () =>{
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;// progress will be set
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex=1;
    }else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex=1;
    }else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    
})
const songsData = [
    {
        songName: "smooth criminal",
        Album: "MJ",
        audioFile: "audio1.mp3",
        imageFile: "image1.jpg"
    },
    {
        songName: "black or white",
        Album: "MJ",
        audioFile: "audio1.mp3",
        imageFile: "image2.jpg"
    },
    {
        songName: "jam",
        Album: "MJ",
        audioFile: "audio1.mp3",
        imageFile: "image3.jpg"
    }
]

const myAudioFile = document.querySelector("audio")
const myplayButton = document.querySelector("#play")
const myForwardButton = document.querySelector("#forward")
const myBackwardButton = document.querySelector("#backward")
const myShuffleButton = document.querySelector("#shuffle")
const myCurrentTimeLabel = document.querySelector(".currenttime")
const myTotalTimeLabel = document.querySelector(".totaltime")
const songNameLabel = document.querySelector("#songname")
const songAlbumLabel = document.querySelector("#songalbum")
const songImage = document.querySelector("#songimage")

var shouldPlay = true
var currentSongIndex = 0

function playAudio() {
    myAudioFile.play()
    myplayButton.classList.replace("fa-play", "fa-pause")
}

function pauseAudio() {
    myAudioFile.pause()
    myplayButton.classList.replace("fa-pause", "fa-play")
}

function LoadSong(songInfo) {
    songNameLabel.textContent = songInfo.songName
    songAlbumLabel.textContent = songInfo.Album
    songImage.src = `images/${songInfo.imageFile}`
    myAudioFile.src = `audios/${songInfo.audioFile}`
    playAudio()
}

myplayButton.addEventListener("click", function () {
    if (shouldPlay === true) {
        playAudio()
    } else {
        pauseAudio()
    }
    shouldPlay = !shouldPlay
})

myAudioFile.addEventListener("timeupdate", function (event) {

    let durationInMin = Math.floor(event.srcElement.duration / 60)
    let durationInSec = Math.floor(event.srcElement.duration % 60)
    myTotalTimeLabel.textContent = `${durationInMin}:${durationInSec}`


    let currentTimeInMin = Math.floor(event.srcElement.currentTime / 60)
    let currentTimeInSec = Math.floor(event.srcElement.currentTime % 60)
    if (currentTimeInSec < 10) {
        currentTimeInSec = `0${currentTimeInSec}`
    }
    myCurrentTimeLabel.textContent = `${currentTimeInMin}:${currentTimeInSec}`
})

myForwardButton.addEventListener("click", function () {
    currentSongIndex++;
    if (currentSongIndex === songsData.length) {
        currentSongIndex = 0;
    }
    let songInfo = songsData[currentSongIndex]
    LoadSong(songInfo)
})

myBackwardButton.addEventListener("click", function () {
    currentSongIndex--;
    if (currentSongIndex === -1) {
        currentSongIndex = songsData.length - 1;
    }
    let songInfo = songsData[currentSongIndex]
    LoadSong(songInfo)
})

myShuffleButton.addEventListener("click", function () {
    alert("Feature will be available soon..");
})

function showMessage() {
    console.log("showMessage")
    var dialog = document.createElement("dialog");
    dialog.innerHTML = "This is a message box.";
    dialog.show();
}
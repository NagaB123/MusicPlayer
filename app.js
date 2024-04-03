

const myAudioFile = document.querySelector("audio")
console.log(myAudioFile)


const myplayButton = document.querySelector("#play")
var shouldPlay = true

myplayButton.addEventListener("click", function() {
    if (shouldPlay === true) {
        myAudioFile.play()
        myplayButton.classList.replace("fa-play", "fa-pause")
    } else {
        myAudioFile.pause()
        myplayButton.classList.replace("fa-pause", "fa-play")
    }
    shouldPlay = !shouldPlay
})


const myForwardButton = document.querySelector("#play")

const myCurrentTimeLabel = document.querySelector(".currenttime")
const myTotalTimeLabel = document.querySelector(".totaltime")


myAudioFile.addEventListener("timeupdate", function(event) {

    let durationInMin = Math.floor(event.srcElement.duration / 60)
    let durationInSec = Math.floor(event.srcElement.duration % 60)
    myTotalTimeLabel.textContent = `${durationInMin}:${durationInSec}`
    

    let currentTimeInMin = Math.floor(event.srcElement.currentTime / 60)
    let currentTimeInSec = Math.floor(event.srcElement.currentTime % 60)
    if(currentTimeInSec < 10) {
        currentTimeInSec = `0${currentTimeInSec}`
    }
    myCurrentTimeLabel.textContent = `${currentTimeInMin}:${currentTimeInSec}`
})

const songsData = [
    {
        songName: "smooth criminal",
        Album: "MJ",
        audioFile: "audio1.mp3",
        imageFile: "image1.jpg"
    }
]
const songName = document.getElementById("name");
const artist = document.getElementById("artist");
const img = document.getElementById("cover_img");
const seekbar = document.getElementById("seekbar");
const progress = document.getElementById("inner");
const playbtn = document.getElementById("play");
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
const autoplayBtn = document.getElementById("autoplay");

const song = new Audio("songs/song1.mp3");
song.volume = 0.2;
playbtn.addEventListener("click", () => {
    if (song.paused == false) {
        song.pause();
        img.style.animationPlayState = "paused";
        playbtn.children[0].setAttribute("src", "images/play.svg")
    } else if (song.paused == true) {
        song.play();
        img.style.animationPlayState = "running";
        playbtn.children[0].setAttribute("src", "images/pause.svg")
    }
})
song.addEventListener("timeupdate", () => {
    const percentage = (song.currentTime / song.duration) * 100
    if (percentage > 0.2) {
        progress.style.width = `${percentage}%`;
    }
})
seekbar.addEventListener("click", (e) => {
    const totalProgress = (e.offsetX / seekbar.clientWidth) * 100
    song.currentTime = song.duration * totalProgress / 100
    progress.style.width = `${totalProgress}%`;
})

const songs = [
    { songName: "dil galti kar baitha hai", artist: "jubin nautiyal", imgpath: "images/cover/cover1.jpg", filepath: "songs/song1.mp3" },
    { songName: "dil meri na sune", artist: "unknown", imgpath: "images/cover/cover2.jpg", filepath: "songs/song2.mp3" },
    { songName: "alaa re alaa simbaa alaa", artist: "unknown", imgpath: "images/cover/cover3.png", filepath: "songs/song3.mp3" },
    { songName: "is qadar", artist: "tulsi kumar and darshan raval", imgpath: "images/cover/cover4.jpg", filepath: "songs/song4.mp3" },
    { songName: "khushi jab bhi teri", artist: "jubin nautiyal", imgpath: "images/cover/cover5.jpg", filepath: "songs/song5.mp3" },
    { songName: "meri jindagi hai tu", artist: "jubin nautiyal", imgpath: "images/cover/cover6.jpg", filepath: "songs/song6.mp3" },
    { songName: "rim jhim", artist: "jubin nautiyal", imgpath: "images/cover/cover7.jpg", filepath: "songs/song7.mp3" },
    { songName: "tenu lehenga", artist: "neha kakkar", imgpath: "images/cover/cover8.jpg", filepath: "songs/song8.mp3" },
    { songName: "tera fitoor", artist: "unknown", imgpath: "images/cover/cover9.jpg", filepath: "songs/song9.mp3" },
    { songName: "yaad piya ki aane lagi", artist: "neha kakkar", imgpath: "images/cover/cover10.jpg", filepath: "songs/song10.mp3" },
    { songName: "o meri heer ve", artist: "unknown", imgpath: "images/cover/cover11.jpg", filepath: "songs/song11.mp3" }
]

let currentSong = 0;
nextbtn.addEventListener("click", () => {
    if (currentSong == 10) {
        currentSong = 0;
        songName.innerHTML = songs[currentSong].songName
        artist.innerHTML = songs[currentSong].artist
        img.setAttribute("src", songs[currentSong].imgpath)
        song.src = songs[currentSong].filepath
        song.play();
        playbtn.children[0].setAttribute("src", "images/pause.svg")
    } else if (currentSong != 10) {
        currentSong += 1;
        songName.innerHTML = songs[currentSong].songName
        artist.innerHTML = songs[currentSong].artist
        img.setAttribute("src", songs[currentSong].imgpath)
        song.src = songs[currentSong].filepath
        song.play();
        playbtn.children[0].setAttribute("src", "images/pause.svg")
    }
    img.style.animationDirection = "normal";
    img.style.animationPlayState = "running";
})
prevbtn.addEventListener("click", () => {
    if (currentSong <= 0) {
        currentSong = 10;
        songName.innerHTML = songs[currentSong].songName
        artist.innerHTML = songs[currentSong].artist
        img.setAttribute("src", songs[currentSong].imgpath)
        song.src = songs[currentSong].filepath
        song.play();
        playbtn.children[0].setAttribute("src", "images/pause.svg")
    } else {
        currentSong -= 1;
        songName.innerHTML = songs[currentSong].songName
        artist.innerHTML = songs[currentSong].artist
        img.setAttribute("src", songs[currentSong].imgpath)
        song.src = songs[currentSong].filepath
        song.play();
        playbtn.children[0].setAttribute("src", "images/pause.svg")
    }
    img.style.animationDirection = "reverse";
    img.style.animationPlayState = "running";
})
let autoplay = false;
autoplayBtn.addEventListener("click", () => {
    if (autoplay == false) {
        autoplay = true;
        autoplayBtn.style.filter = "invert(1)";
    } else {
        autoplay = false
        autoplayBtn.style.filter = "invert(0)";
    }
})
song.addEventListener("ended", () => {
    if (autoplay == true && currentSong == 10) {
        currentSong = 0;
        songName.innerHTML = songs[currentSong].songName
        artist.innerHTML = songs[currentSong].artist
        img.setAttribute("src", songs[currentSong].imgpath)
        song.src = songs[currentSong].filepath
        song.play();
        playbtn.children[0].setAttribute("src", "images/pause.svg")
    } else if (autoplay == true && currentSong != 10) {
        currentSong += 1;
        songName.innerHTML = songs[currentSong].songName
        artist.innerHTML = songs[currentSong].artist
        img.setAttribute("src", songs[currentSong].imgpath)
        song.src = songs[currentSong].filepath
        song.play();
        playbtn.children[0].setAttribute("src", "images/pause.svg")
    } else if (autoplay == false) {
        progress.style.width = "0.2%";
        song.currentTime = 0;
        playbtn.children[0].setAttribute("src", "images/play.svg")
        img.style.animationPlayState = "paused";
    }
})
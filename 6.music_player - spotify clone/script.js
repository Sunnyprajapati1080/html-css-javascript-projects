let seekbar = document.getElementById("seekbar");
let progress = document.getElementById("inner");
let main_button = document.getElementById("main_button");
let main_img = document.getElementById("main_img");
let main_artist = document.getElementById("main_artist");
let main_name = document.getElementById("main_name");
let item_img = document.getElementsByClassName("item_img");
let item_artist = document.getElementsByClassName("item_artist");
let item_name = document.getElementsByClassName("item_name");
let item_button = document.getElementsByClassName("item_button");

let song = new Audio(main_button.getAttribute("url"));
song.volume = 0.2;
main_button.addEventListener("click", () => {
    if (song.paused == false) {
        song.pause();
        main_button.innerHTML = "play"
    } else if (song.paused == true) {
        song.play();
        main_button.innerHTML = "pause"
    }
})
song.addEventListener("timeupdate", () => {
    let percentage = (song.currentTime / song.duration) * 100
    if (percentage > 0.2) {
        progress.style.width = `${percentage}%`;
    }
})
seekbar.addEventListener("click", (e) => {
    const totalProgress = (e.offsetX / seekbar.clientWidth) * 100
    song.currentTime = song.duration * totalProgress / 100
    progress.style.width = `${totalProgress}%`;
})
song.addEventListener("ended", () => {
    progress.style.width = "0.2%";
    song.currentTime = 0;
    main_button.innerHTML = "play";
})
Array.from(item_button).forEach((button, index) => {
    button.addEventListener("click", () => {
        str1 = item_img[index].getAttribute("src")
        str2 = main_img.getAttribute("src")
        main_img.setAttribute("src",str1)
        item_img[index].setAttribute("src",str2)
        str3 = item_artist[index].innerHTML
        str4 = main_artist.innerHTML
        main_artist.innerHTML = str3;
        item_artist[index].innerHTML = str4;
        str5 = item_name[index].innerHTML;
        str6 = main_name.innerHTML;
        main_name.innerHTML = str5;
        item_name[index].innerHTML = str6;
        str7 = item_button[index].getAttribute("url")
        str8 = main_button.getAttribute("url")
        main_button.setAttribute("url",str7)
        item_button[index].setAttribute("url",str8)
        song.src = main_button.getAttribute("url")
        song.play();
        main_button.innerHTML = "pause"
        scrollTo(top)
    })
})
const video = document.querySelector("video");
const url = document.getElementById("url");
const open_btn = document.querySelector("button");
const alert_box = document.querySelector(".alert");
const history = document.querySelector("#history");
const clear_hist = document.querySelector(".clear");

let history_items = []
if(localStorage.getItem("history")!=null){
    history_items = JSON.parse(localStorage.getItem("history"))
    history_items.forEach((item)=>{
        history.innerHTML += `<option value=${item.url}>${item.name}</option>`
    })
}
clear_hist.addEventListener("click",()=>{
    localStorage.clear()
    history_items = []
    history.innerHTML = "<option value='history'>history</option>"
})
open_btn.addEventListener("click", () => {
    let file_url = "file://"+String(url.value)
    file_url = file_url.replace(/\s/g,"%20")
    if(file_url.includes(".mp4")==true){
        video.setAttribute("src",file_url)
    }else{
	if(confirm("is this a webm file?")){
	file_url = file_url+".webm"
        video.setAttribute("src",file_url)
}else{
        file_url = file_url+".mp4"
        video.setAttribute("src",file_url)}

    }
    const fileName = video.src.replaceAll("%20"," ").split("/").reverse()[0].replace(".mp4","").slice(0,40)
    history_items.push({url:file_url,name:fileName})
    history_items.length>5 ? history_items.shift():false
    history.innerHTML = ""
    history_items.forEach((item)=>{
    history.innerHTML += `<option value=${item.url}>${item.name}</option>`
})
    localStorage.setItem("history",JSON.stringify(history_items))
})
video.addEventListener("error",(e)=>{
    alert_box.style.display = "flex"
    setTimeout(()=>{
    alert_box.style.display = "none"    
    },2000)
})
history.addEventListener("change",()=>{
    history.value=="history" ? false: video.src = history.value
}) 
document.querySelector("select").addEventListener("change", () => {
    video.playbackRate = document.querySelector("select").value
})
const backward = document.querySelectorAll(".actions button")[1];
const forward = document.querySelectorAll(".actions button")[2];
backward.addEventListener("click", () => {
    video.currentTime -= 5
})
forward.addEventListener("click", () => {
    video.currentTime += 5
})
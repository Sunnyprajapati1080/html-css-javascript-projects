const item_containers = document.getElementsByClassName("items");
const backward = document.querySelectorAll(".back");
const forward = document.querySelectorAll(".next");

Array.from(item_containers).forEach((item, index) => {
    if (item.scrollLeft == 0) {
        backward[index].style.display = "none";
    } else if (item.scrollLeft >= 254) {
        forward[index].style.display = "none";
    } else {
        backward[index].style.display = "block";
        forward[index].style.display = "block";
    }
})
backward.forEach((item, index) => {
    item.addEventListener("click", () => {
        item_containers[index].scrollBy(-100, 0);
        if (item_containers[index].scrollLeft == 0) {
            backward[index].style.display = "none";
        } else {
            backward[index].style.display = "block";
            forward[index].style.display = "block";
        }
    })
})
forward.forEach((item, index) => {
    item.addEventListener("click", () => {
        item_containers[index].scrollBy(100, 0);
        if (item_containers[index].scrollLeft >= 213) {
            forward[index].style.display = "none";
        } else {
            forward[index].style.display = "block";
            backward[index].style.display = "block";
        }
    })
})
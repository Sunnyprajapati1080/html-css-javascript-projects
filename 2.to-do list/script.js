// initializing variables
const btn_add = document.querySelector("#add_btn");
const btn_clear = document.querySelector("#clear_btn");
const tbody = document.querySelector(".tbody");
const msg = document.querySelector(".msg");
const search_box = document.getElementById("search");
// handle simple events
btn_add.addEventListener("mousedown", () => {
    btn_add.style.backgroundColor = "rgb(61, 61, 61)";
})
btn_add.addEventListener("mouseup", () => {
    btn_add.style.backgroundColor = "rgb(255, 64, 112)";
})
btn_clear.addEventListener("mousedown", () => {
    btn_clear.style.backgroundColor = "rgb(61, 61, 61)";
})
btn_clear.addEventListener("mouseup", () => {
    btn_clear.style.backgroundColor = "rgb(255, 64, 112)";
})
function update() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    let itemsJsonArray = [];
    if (localStorage.getItem("itemsjson") == null) {
        itemsJsonArray.push([title, description]);
        localStorage.setItem("itemsjson", JSON.stringify(itemsJsonArray));
    } else {
        itemsJsonArray = JSON.parse(localStorage.getItem("itemsjson"));
        itemsJsonArray.push([title, description]);
        localStorage.setItem("itemsjson", JSON.stringify(itemsJsonArray));
    }
    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str += `
        <p>${index + 1}</p>
        <p>${element[0]}</p>
        <p>${element[1]}</p>
        <button class="btn_delete" onclick="delete_item(${index})">Delete</button>
        `;
        tbody.innerHTML = str;
    });
    if (tbody.innerHTML == "") {
        msg.style.opacity = "1";
    } else {
        msg.style.opacity = "0";
    }
};
function search() {
    let value = search_box.value;
    let str = "";
    let itemsJsonArray = JSON.parse(localStorage.getItem("itemsjson"));
    let index_plus = 1;
    itemsJsonArray.forEach((element,index) => {
        if (element[0].includes(value) || element[1].includes(value)) {
            str += `
    <p>${index_plus}</p>
    <p>${element[0]}</p>
    <p>${element[1]}</p>
    <button class="btn_delete" onclick="delete_item(${index})">Delete</button>
    `;
            tbody.innerHTML = str;
            index_plus++;
        }
    })
}
search_box.addEventListener("input", search)
function getdata() {
    if (localStorage.getItem("itemsjson") != null) {

        let itemsJsonArray = JSON.parse(localStorage.getItem("itemsjson"));
        let str = "";
        itemsJsonArray.forEach((element, index) => {
            str += `
        <p>${index + 1}</p>
        <p>${element[0]}</p>
        <p>${element[1]}</p>
        <button class="btn_delete" onclick="delete_item(${index})">Delete</button>
        `;
            tbody.innerHTML = str;
        });
        if (tbody.innerHTML == "") {
            msg.style.opacity = "1";
        } else {
            msg.style.opacity = "0";
        }
    }
};
function clear_list() {
    localStorage.clear()
    tbody.innerHTML = "";
    if (tbody.innerHTML == "") {
        msg.style.opacity = "1";
    } else {
        msg.style.opacity = "0";
    }
}
function delete_item(index) {
    let itemsJsonArray = JSON.parse(localStorage.getItem("itemsjson"));
    itemsJsonArray.splice(index, 1);
    if (itemsJsonArray.length == 0) {
        clear_list()
    } else {
        localStorage.setItem("itemsjson", JSON.stringify(itemsJsonArray));
        getdata()
    }
}
btn_add.addEventListener("click", update);
btn_clear.addEventListener("click", clear_list);
getdata();
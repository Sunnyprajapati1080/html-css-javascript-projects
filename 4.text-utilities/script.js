// -----------------initializing variables-----------------
let input = document.querySelector("textarea");
const copyBtn = document.querySelectorAll(".actions button")[0];
const uppercaseBtn = document.querySelectorAll(".actions button")[1];
const lowercaseBtn = document.querySelectorAll(".actions button")[2];
const capitalizeBtn = document.querySelectorAll(".actions button")[3];
const RemoveSpacesBtn = document.querySelectorAll(".actions button")[4];
const clearBtn = document.querySelectorAll(".actions button")[5];

// -----------------creating function-----------------
function showAlert(string) {
    const box = document.createElement("div");
    box.classList.add("alert_box");
    box.innerHTML = string;
    document.body.appendChild(box)
    setTimeout(() => {
        document.body.removeChild(box);
    }, 3000)
    infoUpdate()
}
function showSuccess(string) {
    const box = document.createElement("div");
    box.classList.add("success_box");
    box.innerHTML = string;
    document.body.appendChild(box)
    setTimeout(() => {
        document.body.removeChild(box);
    }, 3000)
    infoUpdate()
}
function copy() {
    if (input.value == "") {
        showAlert("please enter something❗❗");
    } else {
        navigator.clipboard.writeText(input.value)
        showSuccess("your text has been copied successfully")
    }
    infoUpdate()
}
function TouppercaseStr() {
    if (input.value == "") {
        showAlert("please enter something❗❗");
    } else {
        input.style.textTransform = "none";
        input.value = input.value.toUpperCase()
        showSuccess("your text has been converted to uppercase successfully")
    }
    infoUpdate()
}
function tolowercaseStr() {
    if (input.value == "") {
        showAlert("please enter something❗❗");
    } else {
        input.style.textTransform = "none";
        input.value = input.value.toLowerCase()
        showSuccess("your text has been converted to lowercase successfully")
    }
    infoUpdate()
}
function removeSpaces() {
    if (input.value == "") {
        showAlert("please enter something❗❗");
    } else {
        let reg = /\s{2,}/g;
        let arr = input.value.match(reg);
        if (arr != null) {
            arr.forEach((item) => {
                input.value = input.value.replace(item, " ")
            })
        }
        showSuccess("Extra Spaces Removed successfully")
    }
    infoUpdate()
}
function capitalizeStr() {
    if (input.value == "") {
        showAlert("please enter something❗❗");
    } else {
        let arr = input.value.split(" ");
        let result = [];
        for (index in arr) {
            if (arr[index] == "" || arr[index] == undefined) { continue }
            arr[index] = arr[index].slice(0, 1).toUpperCase() + arr[index].slice(1,).toLowerCase()
        }
        input.value = arr.join(" ")
        showSuccess("your text has been capitalized successfully")
    }
    infoUpdate()
}
function clearStr() {
    if (input.value == "") {
        showAlert("please enter something❗❗");
    } else {
        input.value = "";
        showSuccess("your text has been cleared successfully")
    }
    infoUpdate()
}
function infoUpdate() {
    let span1 = info_container.children[0].children[0]
    let span2 = info_container.children[1].children[0];
    let span3 = info_container.children[2].children[0];
    if (input.value == "") {
        span1.innerHTML = "0";
        span2.innerHTML = "0";
        span3.innerHTML = "0";
    } else {
        // number of characters with spaces
        span1.innerHTML = input.value.split("").length;
        // number of characters without spaces
        let arr = input.value.split("");
        let newarr = [];
        for (item of arr) {
            if (item == " " || item == "\n") { continue }
            newarr.push(item);
        }
        span2.innerHTML = newarr.length;
        // number of words
        let arr2 = input.value.split(" ");
        let newarr2 = [];
        for (item of arr2) {
            item = item.replaceAll("\n", "")
            if (item == "") { continue }
            newarr2.push(item)
        }
        console.log(newarr2)
        span3.innerHTML = newarr2.length;
    }
}
// --------------listening events----------------
copyBtn.addEventListener("click", copy)
uppercaseBtn.addEventListener("click", TouppercaseStr);
lowercaseBtn.addEventListener("click", tolowercaseStr)
capitalizeBtn.addEventListener("click", capitalizeStr);
RemoveSpacesBtn.addEventListener("click", removeSpaces);
clearBtn.addEventListener("click", clearStr);

//----------populate information about input---------
let info_container = document.querySelector(".info");
// number of characters
window.onload = infoUpdate
input.addEventListener("input", infoUpdate)
const container = document.getElementsByTagName("main")[0];

let i = 1
a = setInterval(()=>{
	color1 = Math.floor(255*(Number(Math.random().toString().slice(2,4)/100)))
	color2 = Math.floor(255*(Number(Math.random().toString().slice(2,4)/100)))
	color3 = Math.floor(255*(Number(Math.random().toString().slice(2,4)/100)))
	const box = document.createElement("div");
	box.style.backgroundColor = `rgb(${color1},${color2},${color3})`
	box.innerHTML = i;
	container.appendChild(box)
	scrollTo(0,document.body.getBoundingClientRect().height)
	i++
},500)
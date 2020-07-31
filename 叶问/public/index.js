for( let i in movie ){
	document.querySelector(".videoList").appendChild( li = document.createElement("li") );
	li.innerText = i;
	li.title = i;
}

eval(atob("dmlkZW9zID0gdmlkZW9zLm1hcCggaXRlbSA9PiBgaHR0cHM6Ly9va2p4LmNjP3VybD0ke2l0ZW19YCApOw=="));

[...document.querySelectorAll("li")].forEach(item=>{
	item.addEventListener("click",e=>{
		document.querySelector(".videoContainer").innerHTML = "";
		document.querySelector(".videoContainer").appendChild( iframe = document.createElement("iframe") );
		iframe.src = videos[[...document.querySelectorAll("li")].findIndex(cur=>cur==item)];
		iframe.width = "100%";
		iframe.height = "100%";
		[...document.querySelectorAll("li")].forEach(item=>{
			item.className = "";
		});
		e.target.className = "select";
	});
});
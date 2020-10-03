class Button {
	constructor( txt ){
		const div = document.createElement("div");
		div.className = 'movie';
		div.innerText = txt;
		for( let i = 0 ; i < 4 ; i ++ ) div.appendChild( document.createElement("span") );
		document.querySelector(".movies").appendChild( div );
		div.addEventListener("click",e=>{
			setTimeout(function(){
				window.location.href = `./static/${txt}.html`;	
			}, 500);
		});
	}
}
movies.sort().map( item => new Button( item ) );
document.querySelector("#search").addEventListener("keyup",(e)=>{
	document.querySelector(".movies").innerHTML = "";
	var arr = [];
	if( !e.target.value ){
		movies.sort().map( item => new Button( item ) );
	}else {
		for( let item of movies ){
			if( item.indexOf( e.target.value ) >= 0 ){
				arr.push( item );
			}
		}
		arr.sort().map( item => new Button( item ) );
	}
});
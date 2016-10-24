document.getElementById("creater").addEventListener("click", create);
document.getElementById("deleter").addEventListener('click', deleter);
var insert = document.getElementById("main");



function create (random) {
	var newCard = document.createElement("div");
	insert.appendChild(newCard);
	newCard.id = "space";
	newCard.innerHTML = document.getElementById("content").value;
	console.log(newCard.childNodes);
}

// 	//Receiving an error message saying that this is not an element in the DOM. What is going wrong here?
function deleter() {
	var parent = document.getElementById("main");
	var elem = document.getElementById("space");
	console.log(elem);
	elem.parentNode.remove();
}


(function(){
	let header = document.getElementsByClassName("header")[0];
	header.addEventListener("click", function(){
		document.location.href = "/../..";
	});
	
	let mask = document.getElementById("mask-content");
	mask.addEventListener('click', function(){
		document.getElementById('nav-toggle').checked = false;
	})	
})();

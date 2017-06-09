(function(){
	let header = document.getElementsByClassName("header")[0];
	console.log(header);
	header.addEventListener("click", function(){
		document.location.href = "/../..";
	});
})();

(function(){
	let header = document.getElementsByClassName("header")[0];
	console.log(header);
	header.addEventListener("click", function(){
		console.log("click");
		document.location.href = "/..";
	});
})();

/*
each p in postlist
					li.hex
						.hexIn
							a.hexLink(href=p.number)
								img(src=p.url, alt='')
								h1
									= p.title
								p
									= p.short
									
*/
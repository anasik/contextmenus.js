window.addEventListener("load",initiate);
function getAndShowMenu(x,y,z){
	cat = z.id+"menu";
	var el = document.getElementById(cat);
	el.style.left=x+"px";el.style.top=y+"px"; 	
	el.style.position="absolute"; el.style.display="block";
	el.addEventListener('mouseout',initiateDismiss);
}
function dismiss(){
	if(event.target != el){
	hideAll();
	document.removeEventListener('click',dismiss);
	el = 0;	}
}
function initiateDismiss(){
	el=event.target;
	document.addEventListener('click',dismiss)
	el.removeEventListener('mouseout',initiateDismiss);	
}
function hideAll(){
	var w = document.getElementsByClassName("contextmenu");
	for(i=0;i<w.length;i++) {
	w[i].style.display="none";
};
}
function initiate(){
	hideAll();
	var w = document.getElementsByClassName("contextmenu");
	for(i=0;i<w.length;i++) {
	var cat = w[i].id.slice(0,-4);
	document.getElementById(cat).style.cursor="context-menu";
	document.getElementById(cat).addEventListener('contextmenu', function(ev) {
	ev.preventDefault();
	hideAll();
	var x = event.clientX -2+window.pageXOffset;
	var y = event.clientY-2+window.pageYOffset;
	var z = event.target;
	getAndShowMenu(x,y,z);
	return false;
	}, false);
};
}
